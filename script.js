const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: true }));

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // 查詢資料庫
  if (username === 'admin' && password === 'password') {
    req.session.loggedin = true;
    req.session.username = username;
    res.redirect('/home');
  } else {
    res.send('帳號或密碼錯誤！');
  }
});

app.get('/home', (req, res) => {
  if (req.session.loggedin) {
    res.send(`歡迎回來, ${req.session.username}!`);
  } else {
    res.send('請先登錄！');
  }
});

app.listen(3000, () => {
  console.log('服务器正在端口3000上运行...');
});