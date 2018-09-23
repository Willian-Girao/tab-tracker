require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

let corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
  preflightContinue: true
}

app.options('*', cors(corsOptions))
app.use(bodyParser.json())
app.use(cors(corsOptions))
app.use(morgan('combined'))

app.get('/status', (req, res) => {
  res.json({
    message: 'hello world'
  })
})

app.post('/register', (req, res) => {
  res.status(200).send({
    message: 'user registered',
    user: req.body.email
  })
})

const port = process.env.SERVER_PORT || 8081
app.listen(port, () => {
  console.log(`Server up and running on port ${port}`)
})
