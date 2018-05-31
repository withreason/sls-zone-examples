# SLS Examples

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/withreason/slspress-examples/blob/master/LICENSE)

Samples using serverless and slspress.

## Examples

1. Simple CRUD example
2. Calling other lamdba functions.
3. Calling other lamdba functions using SNS (AWS pub/sub).

## Prerequisites

- AWS CLI. [Tell me more.](https://docs.aws.amazon.com/cli/latest/userguide/installing.html)
- Serverless CLI. `npm install -g serverless` or `yarn add -g serverless`
- AWS credentials configuration. [Tell me more.](https://serverless.com/framework/docs/providers/aws/guide/installation#using-aws-profiles)

## Installation

1. Clone the repository.
2. Install the project dependencies. `npm install` or `yarn install`
3. Deploy the code using serverless CLI. `sls deploy`

## Uninstall

To remove all the components deployed on AWS, use the following command:

`sls remove`

## Additional Information

- Serverless configuration file (serverless.yml). [Tell me more.](https://serverless.com/framework/docs/providers/aws/guide/serverless.yml)