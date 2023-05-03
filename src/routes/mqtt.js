const express = require('express')
const router = express.Router()

const verifyToken = require('../middleware/auth')
const adafruit = require('../controllers/mqttController')

const HistoryController = require('../controllers/historyController')

router.get('/', verifyToken,(req, res) => {
    if (req.body.systemS == "1") {
        statusData = adafruit()
        res.json({
            message: " turn off system status successfully",
            statusData})
        HistoryController.saveStatusSystem({systemS: '1', sensorS: statusData.sensorData})
    }
    else {
        HistoryController.saveStatusSystem({systemS: '0', sensorS: '0'})
        res.json({
            suscess: true,
            message: " turn off system status successfully"
        })
    }
})

module.exports = router