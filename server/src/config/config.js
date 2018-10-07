require('dotenv').config()

module.exports = {
  db: {
    database: process.env.DB_NAME || 'tab-tracker',
    user: process.env.DB_USER || 'tab-tracker',
    password: process.env.DB_PASSWORD || 'tab-tracker',
    options: {
      dialect: process.env.DB_DIALECT || 'sqlite',
      host: process.env.DB_HOST || 'localhost',
      storage: './tabtracker.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
