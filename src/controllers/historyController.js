const History = require('../models/history')

class HistoryController {
    async saveStatusSystem({systemS, sensorS}) {
        try {
            const newHistory = new History({systemS, sensorS})
            await newHistory.save()

        } catch (error) {
            console.log(error)
            // res.status(500).json({success: false, message: 'Internal server error'})
        }
    }
}

module.exports = new HistoryController