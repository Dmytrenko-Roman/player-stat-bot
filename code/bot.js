'use strict';

const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TOKEN;
const url = process.env.APP_URL || 'https://playerstatbot.herokuapp.com/';

const bot = new TelegramBot(token, {
  webHook: {
    port: process.env.PORT
  }
});

bot.setWebHook(`${url}/bot${token}`);

bot.onText(/\/topscorers/, msg => {
  const chatId = msg.chat.id;
  /* fetch('https://api.football-data.org/v2/competitions/SA/scorers', {
  headers: { 'X-Auth-Token': '831ab788816b4517bdcf099d8cd99312' },
  dataType: 'json',
  type: 'GET',
  })
    .then(res => res.json())
    .then(json => {
      name = json.scorers[0].player.name;
      goals = json.scorers[0].numberOfGoals;
      bot.sendMessage(chatId, `${name}: ${goals}`);
    });*/
  bot.sendMessage(chatId, 'Hello!');
});