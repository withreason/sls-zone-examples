const { create, jsonMiddleware } = require('slspress');
const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient();

const handler = create();

const TableName =  process.env.DYNAMODB_TABLE;

handler.on('handle')
    .middleware(jsonMiddleware)
    .post('/items', (req, res) => {
        const params = {
          TableName,
          Item: {
              id: req.event.body.id,
              name: req.event.body.name
          }
        }
        return docClient.put(params, err => err ? res.handleError(err) : res.created());
    }).put('/items/{id}', (req, res) => {
        const params = {
            TableName,
            Item: {
                id: req.event.pathParameters.id,
                name: req.event.body.name
            }
        }
        return docClient.put(params, err => err ? res.handleError(err) : res.noContent());
    }).get('/items/{id}', (req, res) => {
        const params = {
            TableName,
            Key: {
                id: req.event.pathParameters.id
            }
        };
        return docClient.get(params, (err, data) => err ? res.handleError(err) : res.ok(data));
    }).delete('/items/{id}', (req, res) => {
        const params = {
            TableName,
            Key: {
                id: req.event.pathParameters.id
            }
        };
        return docClient.delete(params, err => err ? res.handleError(err) : res.noContent());
    });

module.exports = handler.export();
