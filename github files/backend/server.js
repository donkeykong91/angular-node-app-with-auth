var express = require('express');
var app = express();

var messages = [{text: 'some text', owner: 'tim'}, {text: 'other message', owner: 'jane'}];

app.get('/messages', (req, res) => {
    res.json(messages);
})

app.listen(1234);