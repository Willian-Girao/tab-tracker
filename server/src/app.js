require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))

app.get('/status', (req, res) => {
  res.status(200).send({
    message: 'hello world'
  })
})

app.listen(process.env.SERVER_PORT || 8081)
console.log('Server up and running on port 8081')
