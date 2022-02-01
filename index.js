const express = require('express');
const {eventHandler,linebotParser} = require('./eventHandler')

eventHandler()
  
const app = express();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
const server = app.listen(process.env.PORT || 8080, function() {
    const port = server.address().port;
    console.log("App now running on port", port);
    console.log("2/1 21:30")
});