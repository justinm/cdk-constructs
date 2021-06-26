# API Reference

**Classes**

Name|Description
----|-----------
[infra.AwsVpc](#justinm-cdk-constructs-infra-awsvpc)|*No description*
[management.AwsAccountBudgetsStack](#justinm-cdk-constructs-management-awsaccountbudgetsstack)|*No description*
[management.AwsAccountCloudTrailStack](#justinm-cdk-constructs-management-awsaccountcloudtrailstack)|*No description*
[management.AwsAccountStack](#justinm-cdk-constructs-management-awsaccountstack)|*No description*
[management.AwsOktaSamlStack](#justinm-cdk-constructs-management-awsoktasamlstack)|*No description*


**Structs**

Name|Description
----|-----------
[infra.AwsVpcProps](#justinm-cdk-constructs-infra-awsvpcprops)|*No description*
[management.AwsAccountBudgetsStackProps](#justinm-cdk-constructs-management-awsaccountbudgetsstackprops)|*No description*
[management.AwsAccountStackProps](#justinm-cdk-constructs-management-awsaccountstackprops)|*No description*
[management.AwsOktaSamlProps](#justinm-cdk-constructs-management-awsoktasamlprops)|*No description*



## class AwsVpc  <a id="justinm-cdk-constructs-infra-awsvpc"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Submodule__: infra

__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new infra.AwsVpc(scope: Construct, id: string, props: AwsVpcProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[infra.AwsVpcProps](#justinm-cdk-constructs-infra-awsvpcprops)</code>)  *No description*
  * **cidr** (<code>string</code>)  *No description* 
  * **enableNatGateway** (<code>boolean</code>)  *No description* __*Optional*__
  * **maxAxs** (<code>number</code>)  *No description* __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**vpc** | <code>[Vpc](#aws-cdk-aws-ec2-vpc)</code> | <span></span>



## class AwsAccountBudgetsStack  <a id="justinm-cdk-constructs-management-awsaccountbudgetsstack"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable), [ITaggable](#aws-cdk-core-itaggable)
__Submodule__: management

__Extends__: [NestedStack](#aws-cdk-core-nestedstack)

### Initializer




```ts
new management.AwsAccountBudgetsStack(scope: Construct, id: string, props: AwsAccountBudgetsStackProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[management.AwsAccountBudgetsStackProps](#justinm-cdk-constructs-management-awsaccountbudgetsstackprops)</code>)  *No description*
  * **notificationArns** (<code>Array<string></code>)  The Simple Notification Service (SNS) topics to publish stack related events. __*Default*__: notifications are not sent for this stack.
  * **parameters** (<code>Map<string, string></code>)  The set value pairs that represent the parameters passed to CloudFormation when this nested stack is created. __*Default*__: no user-defined parameters are passed to the nested stack
  * **removalPolicy** (<code>[RemovalPolicy](#aws-cdk-core-removalpolicy)</code>)  Policy to apply when the nested stack is removed. __*Default*__: RemovalPolicy.DESTROY
  * **timeout** (<code>[Duration](#aws-cdk-core-duration)</code>)  The length of time that CloudFormation waits for the nested stack to reach the CREATE_COMPLETE state. __*Default*__: no timeout
  * **budgetLimit** (<code>number</code>)  *No description* 
  * **emailAddresses** (<code>Array<string></code>)  *No description* 




## class AwsAccountCloudTrailStack  <a id="justinm-cdk-constructs-management-awsaccountcloudtrailstack"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable), [ITaggable](#aws-cdk-core-itaggable)
__Submodule__: management

__Extends__: [NestedStack](#aws-cdk-core-nestedstack)

### Initializer




```ts
new management.AwsAccountCloudTrailStack(scope: Construct, id: string)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*




## class AwsAccountStack  <a id="justinm-cdk-constructs-management-awsaccountstack"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable), [ITaggable](#aws-cdk-core-itaggable)
__Submodule__: management

__Extends__: [Stack](#aws-cdk-core-stack)

### Initializer




```ts
new management.AwsAccountStack(scope: Construct, id: string, props: AwsAccountStackProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[management.AwsAccountStackProps](#justinm-cdk-constructs-management-awsaccountstackprops)</code>)  *No description*
  * **analyticsReporting** (<code>boolean</code>)  Include runtime versioning information in this Stack. __*Default*__: `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key
  * **description** (<code>string</code>)  A description of the stack. __*Default*__: No description.
  * **env** (<code>[Environment](#aws-cdk-core-environment)</code>)  The AWS environment (account/region) where this stack will be deployed. __*Default*__: The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.
  * **stackName** (<code>string</code>)  Name to deploy the stack with. __*Default*__: Derived from construct path.
  * **synthesizer** (<code>[IStackSynthesizer](#aws-cdk-core-istacksynthesizer)</code>)  Synthesis method to use while deploying this stack. __*Default*__: `DefaultStackSynthesizer` if the `@aws-cdk/core:newStyleStackSynthesis` feature flag is set, `LegacyStackSynthesizer` otherwise.
  * **tags** (<code>Map<string, string></code>)  Stack tags that will be applied to all the taggable resources and the stack itself. __*Default*__: {}
  * **terminationProtection** (<code>boolean</code>)  Whether to enable termination protection for this stack. __*Default*__: false
  * **notificationArns** (<code>Array<string></code>)  The Simple Notification Service (SNS) topics to publish stack related events. __*Default*__: notifications are not sent for this stack.
  * **parameters** (<code>Map<string, string></code>)  The set value pairs that represent the parameters passed to CloudFormation when this nested stack is created. __*Default*__: no user-defined parameters are passed to the nested stack
  * **removalPolicy** (<code>[RemovalPolicy](#aws-cdk-core-removalpolicy)</code>)  Policy to apply when the nested stack is removed. __*Default*__: RemovalPolicy.DESTROY
  * **timeout** (<code>[Duration](#aws-cdk-core-duration)</code>)  The length of time that CloudFormation waits for the nested stack to reach the CREATE_COMPLETE state. __*Default*__: no timeout
  * **budgetLimit** (<code>number</code>)  *No description* 
  * **emailAddresses** (<code>Array<string></code>)  *No description* 
  * **developerPolicies** (<code>Array<[PolicyStatement](#aws-cdk-aws-iam-policystatement)></code>)  *No description* 
  * **adminForDeveloper** (<code>boolean</code>)  *No description* __*Optional*__
  * **metadataDocument** (<code>[SamlMetadataDocument](#aws-cdk-aws-iam-samlmetadatadocument)</code>)  *No description* __*Optional*__




## class AwsOktaSamlStack  <a id="justinm-cdk-constructs-management-awsoktasamlstack"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable), [ITaggable](#aws-cdk-core-itaggable)
__Submodule__: management

__Extends__: [NestedStack](#aws-cdk-core-nestedstack)

### Initializer




```ts
new management.AwsOktaSamlStack(scope: Construct, id: string, props: AwsOktaSamlProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[management.AwsOktaSamlProps](#justinm-cdk-constructs-management-awsoktasamlprops)</code>)  *No description*
  * **notificationArns** (<code>Array<string></code>)  The Simple Notification Service (SNS) topics to publish stack related events. __*Default*__: notifications are not sent for this stack.
  * **parameters** (<code>Map<string, string></code>)  The set value pairs that represent the parameters passed to CloudFormation when this nested stack is created. __*Default*__: no user-defined parameters are passed to the nested stack
  * **removalPolicy** (<code>[RemovalPolicy](#aws-cdk-core-removalpolicy)</code>)  Policy to apply when the nested stack is removed. __*Default*__: RemovalPolicy.DESTROY
  * **timeout** (<code>[Duration](#aws-cdk-core-duration)</code>)  The length of time that CloudFormation waits for the nested stack to reach the CREATE_COMPLETE state. __*Default*__: no timeout
  * **developerPolicies** (<code>Array<[PolicyStatement](#aws-cdk-aws-iam-policystatement)></code>)  *No description* 
  * **adminForDeveloper** (<code>boolean</code>)  *No description* __*Optional*__
  * **metadataDocument** (<code>[SamlMetadataDocument](#aws-cdk-aws-iam-samlmetadatadocument)</code>)  *No description* __*Optional*__




## struct AwsVpcProps  <a id="justinm-cdk-constructs-infra-awsvpcprops"></a>






Name | Type | Description 
-----|------|-------------
**cidr** | <code>string</code> | <span></span>
**enableNatGateway**? | <code>boolean</code> | __*Optional*__
**maxAxs**? | <code>number</code> | __*Optional*__



## struct AwsAccountBudgetsStackProps  <a id="justinm-cdk-constructs-management-awsaccountbudgetsstackprops"></a>






Name | Type | Description 
-----|------|-------------
**budgetLimit** | <code>number</code> | <span></span>
**emailAddresses** | <code>Array<string></code> | <span></span>
**notificationArns**? | <code>Array<string></code> | The Simple Notification Service (SNS) topics to publish stack related events.<br/>__*Default*__: notifications are not sent for this stack.
**parameters**? | <code>Map<string, string></code> | The set value pairs that represent the parameters passed to CloudFormation when this nested stack is created.<br/>__*Default*__: no user-defined parameters are passed to the nested stack
**removalPolicy**? | <code>[RemovalPolicy](#aws-cdk-core-removalpolicy)</code> | Policy to apply when the nested stack is removed.<br/>__*Default*__: RemovalPolicy.DESTROY
**timeout**? | <code>[Duration](#aws-cdk-core-duration)</code> | The length of time that CloudFormation waits for the nested stack to reach the CREATE_COMPLETE state.<br/>__*Default*__: no timeout



## struct AwsAccountStackProps  <a id="justinm-cdk-constructs-management-awsaccountstackprops"></a>






Name | Type | Description 
-----|------|-------------
**budgetLimit** | <code>number</code> | <span></span>
**developerPolicies** | <code>Array<[PolicyStatement](#aws-cdk-aws-iam-policystatement)></code> | <span></span>
**emailAddresses** | <code>Array<string></code> | <span></span>
**adminForDeveloper**? | <code>boolean</code> | __*Optional*__
**analyticsReporting**? | <code>boolean</code> | Include runtime versioning information in this Stack.<br/>__*Default*__: `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key
**description**? | <code>string</code> | A description of the stack.<br/>__*Default*__: No description.
**env**? | <code>[Environment](#aws-cdk-core-environment)</code> | The AWS environment (account/region) where this stack will be deployed.<br/>__*Default*__: The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.
**metadataDocument**? | <code>[SamlMetadataDocument](#aws-cdk-aws-iam-samlmetadatadocument)</code> | __*Optional*__
**notificationArns**? | <code>Array<string></code> | The Simple Notification Service (SNS) topics to publish stack related events.<br/>__*Default*__: notifications are not sent for this stack.
**parameters**? | <code>Map<string, string></code> | The set value pairs that represent the parameters passed to CloudFormation when this nested stack is created.<br/>__*Default*__: no user-defined parameters are passed to the nested stack
**removalPolicy**? | <code>[RemovalPolicy](#aws-cdk-core-removalpolicy)</code> | Policy to apply when the nested stack is removed.<br/>__*Default*__: RemovalPolicy.DESTROY
**stackName**? | <code>string</code> | Name to deploy the stack with.<br/>__*Default*__: Derived from construct path.
**synthesizer**? | <code>[IStackSynthesizer](#aws-cdk-core-istacksynthesizer)</code> | Synthesis method to use while deploying this stack.<br/>__*Default*__: `DefaultStackSynthesizer` if the `@aws-cdk/core:newStyleStackSynthesis` feature flag is set, `LegacyStackSynthesizer` otherwise.
**tags**? | <code>Map<string, string></code> | Stack tags that will be applied to all the taggable resources and the stack itself.<br/>__*Default*__: {}
**terminationProtection**? | <code>boolean</code> | Whether to enable termination protection for this stack.<br/>__*Default*__: false
**timeout**? | <code>[Duration](#aws-cdk-core-duration)</code> | The length of time that CloudFormation waits for the nested stack to reach the CREATE_COMPLETE state.<br/>__*Default*__: no timeout



## struct AwsOktaSamlProps  <a id="justinm-cdk-constructs-management-awsoktasamlprops"></a>






Name | Type | Description 
-----|------|-------------
**developerPolicies** | <code>Array<[PolicyStatement](#aws-cdk-aws-iam-policystatement)></code> | <span></span>
**adminForDeveloper**? | <code>boolean</code> | __*Optional*__
**metadataDocument**? | <code>[SamlMetadataDocument](#aws-cdk-aws-iam-samlmetadatadocument)</code> | __*Optional*__
**notificationArns**? | <code>Array<string></code> | The Simple Notification Service (SNS) topics to publish stack related events.<br/>__*Default*__: notifications are not sent for this stack.
**parameters**? | <code>Map<string, string></code> | The set value pairs that represent the parameters passed to CloudFormation when this nested stack is created.<br/>__*Default*__: no user-defined parameters are passed to the nested stack
**removalPolicy**? | <code>[RemovalPolicy](#aws-cdk-core-removalpolicy)</code> | Policy to apply when the nested stack is removed.<br/>__*Default*__: RemovalPolicy.DESTROY
**timeout**? | <code>[Duration](#aws-cdk-core-duration)</code> | The length of time that CloudFormation waits for the nested stack to reach the CREATE_COMPLETE state.<br/>__*Default*__: no timeout



