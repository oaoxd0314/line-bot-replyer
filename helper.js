const linebot = require('linebot');

const bot = linebot({
    channelId: '1656852921',
    channelSecret: 'd7b6ae01154c80a3200aafc694d63609',
    channelAccessToken: 'MFDXbM2VcVcxctpAO2eIkUJzbkn+aUX4VfxdzTYml+g+nPj2794th7iiTGgZWntHfOeDwcWp0XtSIN9ReVHFZeXAzHWxvw3L6ot4FeVbVxeKPl4Fc1wGTUDGNgA+X5XcNbZ+kUbj/dmwFf9Jq/tKtAdB04t89/1O/w1cDnyilFU='
});

function do_post(to,msg){
    bot.push(to,{
        "type": "text",
        "text": 'Hi all'
    })
}

module.exports(do_post)