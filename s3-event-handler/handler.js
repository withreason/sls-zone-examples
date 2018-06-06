module.exports.fileAdded = (event, context, callback) => {
  console.log('EVENT', JSON.stringify(event)),
  callback(null);
}