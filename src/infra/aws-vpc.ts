import * as ec2 from '@aws-cdk/aws-ec2';
import * as cdk from '@aws-cdk/core';

export interface AwsVpcProps {
  readonly cidr: string;
  readonly maxAxs?: number;
  readonly enableNatGateway?: boolean;
}

export class AwsVpc extends cdk.Construct {
  readonly vpc: ec2.Vpc;

  constructor(scope: cdk.Construct, id: string, props: AwsVpcProps) {
    super(scope, id);

    this.vpc = new ec2.Vpc(this, 'Vpc', {
      cidr: props.cidr,
      enableDnsHostnames: true,
      enableDnsSupport: true,
      maxAzs: props.maxAxs ?? 1,
      natGateways: props.enableNatGateway ? 1 : 0,
    });
  }
}
