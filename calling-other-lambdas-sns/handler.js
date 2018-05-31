const { create, jsonMiddleware } = require('slspress');
const AWS = require('aws-sdk');

const handler = create();

const sns = new AWS.SNS();

handler.on('handle')
    .middleware(jsonMiddleware)
    .get('/post-to-sns', (req, res) => {

        var params = {
            Message: JSON.stringify({ x: 345, y: 543 }),
            Subject: 'post-to-sns',
            TopicArn: process.env.MULTIPLY_NUMBER_SNS_TOPIC
          };
    
        sns.publish(params, (err, data) => {
            if (err) return res.handleError(err);
            else return res.ok(data);
        });
    });

module.exports = handler.export();

module.exports.multiplyNumberSNS = (event, context) => {
    console.log('EVENT: ', JSON.stringify(event))
    const vars = JSON.parse(event.Records[0].Sns.Message);
    console.log(vars.x * vars.y);
};