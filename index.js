const fetch = require('node-fetch');
const botResponse = require('./botResponse');

const token = process.env.oAuthAccessToken;

exports.handler = async (event, context, callback) => {
  console.log('event.body', event.body);
  const eventBody = JSON.parse(event.body);

  const { channel, text } = eventBody.event;

  if (text.includes('Pick From')) {
    const re = /\[(.*)\]/g;
    const stringAray = text.match(re)[0];
    const noBrackets = stringAray.slice(1, -1);
    const array = noBrackets.split(',');

    const responseText = array[Math.floor(Math.random() * array.length)];

    botResponse(channel, responseText);
  }

  const challengeResponse = { challenge: event.body };

  callback(null, {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(challengeResponse),
  });
};
