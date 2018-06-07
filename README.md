# SLS Zone Examples

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/withreason/slspress-examples/blob/master/LICENSE)

Samples using Serverless and slspress.

## Examples

- [First serverless.](https://github.com/withreason/sls-zone-examples/tree/master/first-serverless).
- [Simple CRUD.](https://github.com/withreason/sls-zone-examples/tree/master/simple-crud-example)
- [Hello World offline.](https://github.com/withreason/sls-zone-examples/tree/master/hello-world-offline)
- [Static Website](https://github.com/withreason/sls-zone-examples/tree/master/static-website)
- [Calling other lamdba functions.](https://github.com/withreason/sls-zone-examples/tree/master/calling-other-lambdas)
- [Calling other lamdba functions using SNS (AWS pub/sub).](https://github.com/withreason/sls-zone-examples/tree/master/calling-other-lambdas-sns)
- [CloudWatch event handler.](https://github.com/withreason/sls-zone-examples/tree/master/cloudwatch-event-handler)
- [DynamoDB event handler.](https://github.com/withreason/sls-zone-examples/tree/master/dynamodb-event-handler)
- [SES event handler.](https://github.com/withreason/sls-zone-examples/tree/master/listen-to-ses-events)
- [S3 event handler.](https://github.com/withreason/sls-zone-examples/tree/master/s3-event-handler)
- [Alexa handler.](https://github.com/withreason/sls-zone-examples/tree/master/alexa-event-handler)

## Prerequisites

- AWS CLI. [Tell me more.](https://docs.aws.amazon.com/cli/latest/userguide/installing.html)
- Serverless CLI. `npm install -g serverless` or `yarn add -g serverless`
- AWS credentials configuration. [Tell me more.](https://serverless.com/framework/docs/providers/aws/guide/installation#using-aws-profiles)

## Installation

1. Clone the repository.
2. Install the project dependencies. `npm install` or `yarn install`
3. Deploy the code using Serverless CLI. `sls deploy`

## Uninstall

To remove all the components deployed on AWS, use the following command:

`sls remove`

## Additional Information

- Serverless configuration file (serverless.yml). [Tell me more.](https://serverless.com/framework/docs/providers/aws/guide/serverless.yml)