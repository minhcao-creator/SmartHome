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

    async deleteHistory(req, res) {
        try {
            const histor = await History.findOneAndDelete({_id: req.body._id})
            if (histor) {
                res.json({
                    success: true,
                    message: 'Delete history successfully'
                })
            }
            else {
                res.json ({
                    success: true,
                    message: 'History invalid'
                })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({success: false, message: 'Internal server error'})
        }
    }

    async deleteManyHistory(req, res) {
        try {
            const ids = req.body.ids
            const histor = await History.deleteMany({_id:{$in:ids}})
            res.json({
                success: true,
                message: 'Delete histories successfully'
            })
            
        } catch (error) {
            console.log(error)
            res.status(500).json({success: false, message: 'Internal server error'})
        }
    }

    async deleteAllHistory(req, res) {
        try {
            const histor = await History.deleteMany({})
            
            res.json({
                success: true,
                message: 'History is empty'
            })
            
        } catch (error) {
            console.log(error)
            res.status(500).json({success: false, message: 'Internal server error'})
        }
    }
}

module.exports = new HistoryController