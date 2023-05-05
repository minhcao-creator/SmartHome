const express = require('express')

const router = express.Router()

const verifyToken = require('../middleware/auth')
const HistoryController = require('../controllers/historyController')

//khi người dùng bật tắt hệ thống
router.post('/create', verifyToken, async(req, res) => {
    HistoryController.saveStatusSystem({systemS: req.systemS, sensorS: '0'})
})

router.delete('/delete', verifyToken, HistoryController.deleteHistory)

router.delete('/delete-many', verifyToken, HistoryController.deleteManyHistory)

router.delete('/delete-all', verifyToken, HistoryController.deleteAllHistory)

module.exports = router