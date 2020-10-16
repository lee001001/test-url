const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const linkCheck = require('link-check')

const port = 3000
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  console.log(req.body.origin)
  const url = req.body.origin
  linkCheck(`${url}`, function (err, result) {
    if (err) {
      alert('This is dead')
      console.error(err)
    }
    console.log(`${result.link} is ${result.status}`)
  })
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
