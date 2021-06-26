import * as iam from '@aws-cdk/aws-iam';
import { Effect } from '@aws-cdk/aws-iam';
import { SamlMetadataDocument } from '@aws-cdk/aws-iam/lib/saml-provider';
import * as cdk from '@aws-cdk/core';

export interface AwsOktaSamlProps extends cdk.NestedStackProps {
  readonly metadataDocument?: SamlMetadataDocument;
  readonly developerPolicies: iam.PolicyStatement[];
  readonly adminForDeveloper?: boolean;
}

export class AwsOktaSamlStack extends cdk.NestedStack {
  constructor(scope: cdk.Construct, id: string, props: AwsOktaSamlProps) {
    super(scope, id, props);

    const oktaUser = new iam.User(this, 'OktaUser', {
      userName: 'okta-gateway-user',
    });

    oktaUser.addToPolicy(
      new iam.PolicyStatement({
        actions: ['iam:ListRoles', 'iam:ListAccountAliases'],
        resources: ['*'],
      }),
    );

    if (props.metadataDocument) {
      const samlProvider = new iam.SamlProvider(this, 'OktaProvider', {
        name: 'okta',
        metadataDocument: props.metadataDocument,
      });

      const federatedPrincipal = new iam.FederatedPrincipal(
        samlProvider.samlProviderArn,
        {
          StringEquals: {
            'SAML:aud': 'https://signin.aws.amazon.com/saml',
          },
        },
        'sts:AssumeRoleWithSAML',
      );

      const adminPolicy = iam.ManagedPolicy.fromManagedPolicyArn(this, 'AdministratorPolicy', 'arn:aws:iam::aws:policy/AdministratorAccess');
      const billingPolicy = iam.ManagedPolicy.fromManagedPolicyArn(this, 'BillingPolicy', 'arn:aws:iam::aws:policy/job-function/Billing');
      const viewOnlyPolicy = iam.ManagedPolicy.fromManagedPolicyArn(this, 'ViewOnlyPolicy', 'arn:aws:iam::aws:policy/job-function/ViewOnlyAccess');

      const billingRole = new iam.Role(this, 'BillingRole', {
        roleName: 'okta-billing-role',
        assumedBy: federatedPrincipal,
      });

      billingRole.addManagedPolicy(billingPolicy);
      billingRole.addManagedPolicy(viewOnlyPolicy);

      const readOnlyRole = new iam.Role(this, 'ReadOnlyRole', {
        roleName: 'okta-readonly-role',
        assumedBy: federatedPrincipal,
      });

      readOnlyRole.addManagedPolicy(viewOnlyPolicy);

      const adminRole = new iam.Role(this, 'AdminRole', {
        roleName: 'okta-admin-role',
        assumedBy: federatedPrincipal,
      });

      adminRole.addManagedPolicy(adminPolicy);
      adminRole.addManagedPolicy(billingPolicy);

      const developerRole = new iam.Role(this, 'DeveloperRole', {
        roleName: 'okta-developer-role',
        assumedBy: federatedPrincipal,
      });

      if (props.adminForDeveloper) {
        developerRole.addManagedPolicy(adminPolicy);
      }

      props.developerPolicies.forEach((policy) => developerRole.addToPolicy(policy));

      developerRole.addToPolicy(
        new iam.PolicyStatement({
          effect: Effect.DENY,
          actions: ['organizations:*', 'billing:*'],
        }),
      );
    }
  }
}
