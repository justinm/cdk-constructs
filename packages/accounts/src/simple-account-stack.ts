import * as cdk from '@aws-cdk/core';
import { SimpleAccountBudgetsStack, SimpleAccountBudgetsStackProps } from './simple-account-budgets-stack';
import { SimpleAccountCloudTrail } from './simple-account-cloudtrail';
import { OktaSamlStack, AwsOktaSamlProps } from './okta-saml-stack';

export interface SimpleAccountStackProps extends cdk.StackProps, SimpleAccountBudgetsStackProps, AwsOktaSamlProps {}

export class SimpleAccountStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: SimpleAccountStackProps) {
    super(scope, id, props);

    new SimpleAccountCloudTrail(this, 'CloudTrail');
    new SimpleAccountBudgetsStack(this, 'Budgets', props);
    new OktaSamlStack(this, 'Okta', props);
  }
}
