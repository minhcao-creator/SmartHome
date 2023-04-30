const express = require('express')
const router = express.Router()

const verifyToken = require('../middleware/auth')
const adafruit = require('../controllers/mqttController')

router.get('/', verifyToken, async(req, res) => {
    statusData = adafruit()
    res.json(statusData)
})

module.exports = router