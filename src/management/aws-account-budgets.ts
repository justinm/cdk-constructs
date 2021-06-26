import * as budgets from '@aws-cdk/aws-budgets';
import * as cdk from '@aws-cdk/core';

export interface AwsAccountBudgetsStackProps extends cdk.NestedStackProps {
  readonly budgetLimit: number;
  readonly emailAddresses: string[];
}

export class AwsAccountBudgetsStack extends cdk.NestedStack {
  constructor(scope: cdk.Construct, id: string, props: AwsAccountBudgetsStackProps) {
    super(scope, id, props);

    new budgets.CfnBudget(this, 'Budget', {
      budget: {
        budgetName: 'AccountBudget',
        budgetType: 'COST',
        budgetLimit: {
          amount: props.budgetLimit,
          unit: 'USD',
        },
        timeUnit: 'MONTHLY',
      },
      notificationsWithSubscribers: [
        {
          notification: {
            comparisonOperator: 'GREATER_THAN',
            threshold: 75,
            thresholdType: 'PERCENTAGE',
            notificationType: 'FORECASTED',
          },
          subscribers: props.emailAddresses.map((address) => ({
            subscriptionType: 'EMAIL',
            address,
          })),
        },
      ],
    });
  }
}
