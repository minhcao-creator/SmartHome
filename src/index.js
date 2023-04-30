require('dotenv').config()
const express = require('express')

const database = require('./config/database/index')
database.connect()

const app = express()
app.use(express.json())

var cors = require('cors')
app.use(cors())

const userRouter = require('./routes/user')
const statusRouter = require('./routes/mqtt')


const PORT = 3001

app.use('/status', statusRouter)
app.use('/', userRouter)


app.listen(PORT, () => console.log('server start successfully'))