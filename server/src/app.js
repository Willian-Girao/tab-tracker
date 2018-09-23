require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const { sequelize } = require('./models')

let corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
  preflightContinue: true
}

app.options('*', cors(corsOptions))
app.use(bodyParser.json())
app.use(cors(corsOptions))
app.use(morgan('combined'))

require('./routes')(app)

const port = process.env.SERVER_PORT || 8081

// Conects sequelize to the configured databese
sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server up and running on port ${port}`)
    })
  })
