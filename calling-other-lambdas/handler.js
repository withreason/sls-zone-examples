const { create, jsonMiddleware } = require('slspress');
const AWS = require('aws-sdk');

const handler = create();

const lambda = new AWS.Lambda( { region: 'eu-west-1' } );

const fPrepend = [
    process.env.SERVERLESS_SERVICE_NAME,
    process.env.SERVERLESS_SERVICE_STAGE, ''
    ].join('-');

handler.on('handle')
    .middleware(jsonMiddleware)
    .get('/calling-other-lambdas', (req, res) => {

        const params = {
            FunctionName: fPrepend + 'multiply-number', 
            InvocationType: "RequestResponse", 
            LogType: "Tail", 
            Payload: JSON.stringify({x: 5, y: 100}),
          };

        lambda.invoke(params, (err, data) => {
            if (err) return res.handleError(err);
            else return res.ok(data);
        });
    })
    .post('/multiply-number', (req, res) => {
        const vars = req.event.body;
        const response = {
            statusCode: 200,
            headers: {
              'Access-Control-Allow-Origin': '*', // Required for CORS support to work
            },
            body: JSON.stringify({
              result: vars.x * vars.y || 0,
              input: req.event,
            })
        };
        return res.ok(response);
    });

module.exports = handler.export();
