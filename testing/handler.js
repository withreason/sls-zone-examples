const logic = require('./logic');

module.exports.multiplyNumbersForTest = (event, context, callback) => {
  // event.body will be set in case of post request and event will be set in case of payload passed by other lambda
  const vars = event.query || event;
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      result: logic.multiplyNumbers(vars.x, vars.y) || 0,
      input: event,
    }),
  };

  callback(null, response);
};