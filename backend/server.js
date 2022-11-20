const express = require('express')
const dotenv = require('dotenv')
const {errorHandler} = require('./middleware/errorMiddleware')
const { application } = require('express')

dotenv.config() // necessary to use
const port = process.env.PORT

const app = express()

// middleware for sending goal data on body reqs
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/app/goals', require('./routes/goalRoutes'))

app.use(errorHandler) // returns err in json

app.listen(port, () => {
    console.log('server running...')
})