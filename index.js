const linebot = require('linebot');
const express = require('express');

const bot = linebot({
  channelId: '1656852921',
  channelSecret: 'd7b6ae01154c80a3200aafc694d63609',
  channelAccessToken: 'MFDXbM2VcVcxctpAO2eIkUJzbkn+aUX4VfxdzTYml+g+nPj2794th7iiTGgZWntHfOeDwcWp0XtSIN9ReVHFZeXAzHWxvw3L6ot4FeVbVxeKPl4Fc1wGTUDGNgA+X5XcNbZ+kUbj/dmwFf9Jq/tKtAdB04t89/1O/w1cDnyilFU='
});


bot.on('message', function(event) {
    console.log(event); //把收到訊息的 event 印出來看看
  });
  
const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
const server = app.listen(process.env.PORT || 8080, function() {
    const port = server.address().port;
    console.log("App now running on port", port);
});