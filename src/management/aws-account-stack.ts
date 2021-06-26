import * as cdk from '@aws-cdk/core';
import { AwsAccountBudgetsStack, AwsAccountBudgetsStackProps } from './aws-account-budgets';
import { AwsAccountCloudTrailStack } from './aws-account-cloudtrail';
import { AwsOktaSamlStack, AwsOktaSamlProps } from './aws-okta-saml-stack';

export interface AwsAccountStackProps extends cdk.StackProps, AwsAccountBudgetsStackProps, AwsOktaSamlProps {}

export class AwsAccountStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: AwsAccountStackProps) {
    super(scope, id, props);

    new AwsAccountCloudTrailStack(this, 'CloudTrailStack');
    new AwsAccountBudgetsStack(this, 'BudgetsStack', props);
    new AwsOktaSamlStack(this, 'Okta', props);
  }
}
