exports.handler = async (event, context, callback) => {
  console.log('event.body', event.body);

  const challengeResponse = { challenge: event.body };

  console.log(challengeResponse);

  callback(null, {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(challengeResponse),
  });
};
