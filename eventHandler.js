const linebot = require('linebot');
require('dotenv').config();

// const bot = linebot({
//     channelId: CHANNEL_ID,
//     channelSecret: CHANNEL_SECRET,
//     channelAccessToken: CHANNEL_ACCESS_TOKEN
// });

const bot = linebot({
    channelId: '1656852921',
    channelSecret: 'd7b6ae01154c80a3200aafc694d63609',
    channelAccessToken: 'MFDXbM2VcVcxctpAO2eIkUJzbkn+aUX4VfxdzTYml+g+nPj2794th7iiTGgZWntHfOeDwcWp0XtSIN9ReVHFZeXAzHWxvw3L6ot4FeVbVxeKPl4Fc1wGTUDGNgA+X5XcNbZ+kUbj/dmwFf9Jq/tKtAdB04t89/1O/w1cDnyilFU='
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
        console.log(event)
        let msg = event.message.text;
        if (event.message.type === 'text') {
            
            if (msg === 'help'){
                // event.reply('您可以使用:' + '</br>' +'')
                event.reply('目前尚未有任何功能 你要幫我嗎 :<')
            }
        }
    });
}

bot.push('U0891aac7763248897f66c525f69ca7f6',{
    "type": "sticker",
    "packageId": "446",
    "stickerId": "1988"
  })

module.exports = {eventHandler,linebotParser}