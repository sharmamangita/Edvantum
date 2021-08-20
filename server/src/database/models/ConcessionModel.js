let mongoose = require('mongoose');
const Schema = mongoose.Schema

let ConcessionSchema = new Schema({
		concessionType: {
        type: String,
    },
    concessionPercent: {
        type: Boolean,
    },
    concessionAmount:{
        type: String
    }
},{
    timestamps: true
});

module.exports.concession = mongoose.model('concession', ConcessionSchema);