import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';

export class CdkTypescriptStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


    const hello = new lambda.Function(this, 'HelloHandler',  {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset('lambda'),
      handler: 'hello.handler'
    });

    const messageFromLambda = new lambda.Function(this, 'MessageHandler',  {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset('lambda'),
      handler: 'messageFromLambda.sayHelloHandler'
    })

    new apigw.LambdaRestApi(this, 'Endpoint',  {
      handler: hello
    });

    new apigw.LambdaRestApi(this, 'MessageEndpoint',  {
      handler: messageFromLambda
    })

  }
}
