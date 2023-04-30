require('dotenv').config()
const express = require('express')

const database = require('./config/database/index')
database.connect()

const app = express()
app.use(express.json())

const userRouter = require('./routes/user')
const statusRouter = require('./routes/mqtt')


const PORT = 3001

app.use('/status', statusRouter)
app.use('/', userRouter)
// app.get('/', (req, res) => {
//     res.json('hello world')
// })

app.listen(PORT, () => console.log('server start successfully'))