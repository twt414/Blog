var crypto = require('crypto')
var User = require('../models/user.js')
module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('index', { title: '主页' })
  })
  app.get('/reg', function (req, res) {
    res.end(JSON.stringify({d: 'd'}))
  })
  app.post('/reg', function (req, res) {
    var name = req.body.name
    var password = req.body.password
    var passwordRe = req.body['password-repeat']
    if (passwordRe !== password) {
      console.log(res)
    }
  })
  app.get('/login', function (req, res) {
    console.log(1)
    res.render('login', { title: '登录' })
  })
  app.post('/login', function (req, res) {
  })
  app.get('/post', function (req, res) {
    res.render('post', { title: '发表' })
  })
  app.post('/post', function (req, res) {
  })
  app.get('/logout', function (req, res) {
  })
}
