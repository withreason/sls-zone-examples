module.exports.dynamoDBEvent = (event, context, callback) => {
  console.log('EVENT', JSON.stringify(event)),
  callback(null);
}