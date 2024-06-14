const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/api/test', (req,resp) => {
    res.json('text ok');
});

app.post('/api/transaction', (req,Resp) => {
    res.json(req,body)
});

app.listen(4000);