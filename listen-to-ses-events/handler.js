module.exports.emailReceived = (event, context, callback) => {
    console.log('EVENT', JSON.stringify(event));
    callback(null);
}