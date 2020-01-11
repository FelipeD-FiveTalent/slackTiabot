const fetch = require('node-fetch');

const token = process.env.oAuthAccessToken;

const botResponse = (channel, text) => {
  const url = 'https://slack.com/api/chat.postMessage';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      channel,
      text,
    }),
  };

  fetch(url, options).then(response => {
    console.log(response.status);
  });
};

module.exports = botResponse;
