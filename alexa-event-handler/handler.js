module.exports.skillReasonTestOne = (event, context, callback) => {
    console.log('EVENT', JSON.stringify(event))
    const response = {
      version: '1.0',
      response: {
        outputSpeech: {
          type: 'PlainText',
          text: `Hello from Reason Serverless!`,
        },
        shouldEndSession: false,
      },
    };
  
    callback(null, response);
  }