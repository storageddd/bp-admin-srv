const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 8080;

app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('/static', express.static(path.join(__dirname, 'stubs')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/index.html')));
app.get('/order/*', (req, res) => res.sendFile(path.join(__dirname+'/index.html')));
app.get('/orders', (req, res) => res.sendFile(path.join(__dirname+'/index.html')));

app.get('/api/config', (req, res) => {
  if (!isAuthorizationTokenValid(req.headers.authorization)) return;

  let data = require('./stubs/config.json');
  return res.send(data);
});

app.get('/api/orders', (req, res) => {
  if (!isAuthorizationTokenValid(req.headers.authorization)) return;

  let data = require('./stubs/orders.json');
  return res.send(data);
});

app.get('/api/order/*', (req, res) => {
  if (!isAuthorizationTokenValid(req.headers.authorization)) return;

  let data = require('./stubs/order.json');
  data.id = parseInt(req.params[0]);
  return res.send(data);
});

function isAuthorizationTokenValid(token) {
  return true;
}

app.post('/api/cancel_order/*', (req, res) => { console.log(req.body); return res.sendStatus(200) });
app.post('/api/change_order_status/*', (req, res) => { console.log(req.body); return res.sendStatus(200) });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

