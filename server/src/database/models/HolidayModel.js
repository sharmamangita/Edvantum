let mongoose = require('mongoose');
const Schema = mongoose.Schema

let HolidaysSchema = new Schema({
	festival: {
        type: String,
    },
    dateFrom: {
        type: String,
    },
    dateTo:{
        type: String
    },
    active:{
        type: Boolean,
        default: true
    }
},{
    timestamps: true
});

module.exports.holidays = mongoose.model('holidays', HolidaysSchema);