const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 8080;

app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('/static', express.static(path.join(__dirname, 'stubs')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/index.html')));
app.get('/teams', (req, res) => res.sendFile(path.join(__dirname+'/index.html')));
app.get('/account/*', (req, res) => res.sendFile(path.join(__dirname+'/index.html')));

app.post('/api/post-success', (req, res) => { console.log(req.body); return res.sendStatus(200)});
app.post('/api/post-error', (req, res) => res.sendStatus(400));

app.get('/api/documents', (req, res) => {
  let data = require('./stubs/documens.json');
  return res.send(data);
});

app.get('/api/news', (req, res) => {
  let data = require('./stubs/news.json');
  return res.send(data);
});
app.get('/api/license', (req, res) => {
  let data = require('./stubs/license.json');
  return res.send(data);
});

app.get('/api/teams', (req, res) => {
  let data = require('./stubs/teams/index.json');
  return res.send(data);
});

app.get('/api/teams/pagi', (req, res) => {
  let data = require('./stubs/teams/pagi.json');
  return res.send(data);
});

app.get('/api/teams/levels', (req, res) => {
  let data = require('./stubs/teams/levels.json');
  return res.send(data);
});

app.get('/api/teams/level-change/*', (req, res) => {
  let data = require('./stubs/teams/level-change.json');
  return res.send(data);
});

app.get('/api/partners', (req, res) => {
  let data = require('./stubs/partners/index.json');
  return res.send(data);
});

app.get('/api/partners/pagi', (req, res) => {
  let data = require('./stubs/partners/pagi.json');
  return res.send(data);
});

app.get('/api/partners/view', (req, res) => {
  let data = require('./stubs/partners/view.json');
  return res.send(data);
});

app.get('/api/partners/new', (req, res) => {
  let data = require('./stubs/partners/new.json');
  return res.send(data);
});

app.get('/api/account/balance', (req, res) => {
  let data = require('./stubs/account/balance.json');
  return res.send(data);
});

app.get('/api/account/index', (req, res) => {
  let data = require('./stubs/account/index.json');
  return res.send(data);
});

app.get('/api/account/payment', (req, res) => {
  let data = require('./stubs/account/payment.json');
  return res.send(data);
});

app.get('/api/auth/welcome', (req, res) => {
  let data = require('./stubs/auth/welcome.json');
  return res.send(data);
});

app.get('/api/global', (req, res) => {
  let data = require('./stubs/global.json');
  return res.send(data);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

