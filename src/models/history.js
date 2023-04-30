const mongoose = required('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const history = new Schema({
    systemS: {
        type: String,
        enum: ['0', '1']
    },
    sensorS: {
        type: String,
        enum: ['0', '1']
    }, 
    timeSave: {
        type: Date,
        default: Date.now()
    }
})