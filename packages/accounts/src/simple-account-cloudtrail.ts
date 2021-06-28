import * as cloudtrail from '@aws-cdk/aws-cloudtrail';
import * as iam from '@aws-cdk/aws-iam';
import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';

export class SimpleAccountCloudTrail extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);

    const cloudTrailBucket = new s3.Bucket(this, 'CloudTrail');
    const {account} = cdk.Stack.of(this);

    cloudTrailBucket.addToResourcePolicy(
      new iam.PolicyStatement({
        actions: ['s3:GetBucketAcl'],
        resources: [cloudTrailBucket.bucketArn],
        principals: [new iam.ServicePrincipal('cloudtrail.amazonaws.com')],
      }),
    );

    cloudTrailBucket.addToResourcePolicy(
      new iam.PolicyStatement({
        actions: ['s3:PutObject'],
        resources: [cloudTrailBucket.arnForObjects(`AWSLogs/${account}/*`)],
        principals: [new iam.ServicePrincipal('cloudtrail.amazonaws.com')],
      }),
    );

    new cloudtrail.Trail(this, 'CloudTrail', {
      bucket: cloudTrailBucket,
      sendToCloudWatchLogs: false,
      isMultiRegionTrail: true,
      includeGlobalServiceEvents: true,
      enableFileValidation: true,
    });
  }
}
