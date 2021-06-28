import * as cdk from '@aws-cdk/core';
import { OktaSamlStack, OktaSamlStackProps } from './okta-saml-stack';
import { SimpleAccountBudgetsStack, SimpleAccountBudgetsStackProps } from './simple-account-budgets-stack';
import { SimpleAccountCloudTrail } from './simple-account-cloudtrail';

export interface SimpleAccountStackProps extends cdk.StackProps, SimpleAccountBudgetsStackProps, OktaSamlStackProps {}

export class SimpleAccountStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: SimpleAccountStackProps) {
    super(scope, id, props);

    new SimpleAccountCloudTrail(this, 'CloudTrail');
    new SimpleAccountBudgetsStack(this, 'Budgets', props);
    new OktaSamlStack(this, 'Okta', props);
  }
}
