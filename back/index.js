require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const { db, cors: options } = require('./configs')
const errors = require('./misc/errors')

const app = express()

const port = process.env.PORT || 3000;

app.use(cors(options))
app.use(express.json())
app.use(cookieParser())

const routes = require('./routes')

app.use(routes(db))

app.use((req, res, next) => {
    next(errors[404])
})

app.use(({ statusCode, error }, req, res, next) => {
    res.status(statusCode).json({
        success: false,
        message: error.message,
    })
})

app.listen(
    port,
    () => console.info(`> listening at: ${port}`)
)
