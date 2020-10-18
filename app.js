const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
// const linkCheck = require('link-check')
const cookieParser = require('cookie-parser')

const port = 3000
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser('MY SECRET'))

app.get('/', (req, res) => {
  // res.cookie('name', 'tobi', { domain: '.example.com', path: '/admin', secure: true })

  res.cookie('name', 'tobi', { maxAge: 1000 * 60 * 60 * 24 * 7, httpOnly: true }) // name: 'name' , value = 'tobi' , [options: maxAge , httpOnly: true]
  res.end('Cookie has been set')

  res.render('index')
})

app.get('/readCookies', function (req, res) {
  res.send(req.cookies.cookie1)
})

app.post('/', (req, res) => {
  res.cookie('name', 'tobi', { domain: './', path: '', secure: true })
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
