const linebot = require('linebot');
require('dotenv').config();

// const bot = linebot({
//     channelId: process.env.CHANNEL_ID,
//     channelSecret: process.env.CHANNEL_SECRET,
//     channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
// });

const bot = linebot({
    channelId: CHANNEL_ID,
    channelSecret: CHANNEL_SECRET,
    channelAccessToken: CHANNEL_ACCESS_TOKEN
});

const linebotParser = bot.parser();

function eventHandler() {
    bot.on('join',function(event){
        console.log(event)
        event.reply('Hi 歡迎使用，如果你想玩的話到 https://github.com/oaoxd0314/line-bot-replyer 自己 clone 一份')
    })
    
    bot.on('memberJoined',function(event){
        console.log(event)
        event.reply('近來先看記事本喔 (ゝ∀･)b 有事要跟大家商量')
    })

    bot.on('message', function(event) {
        let msg = event.message.text;
        if (event.message.type == 'text') {
            
            if (msg === 'help'){
                // event.reply('您可以使用:' + '</br>' +'')
                event.reply('目前尚未有任何功能 你要幫我嗎 :<')
            }
        }
    });
}

module.exports = {eventHandler,linebotParser}