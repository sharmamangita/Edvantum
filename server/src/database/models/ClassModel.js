let mongoose = require('mongoose');
const Schema = mongoose.Schema

let ClassSchema = new Schema({
		className: {
			type: String
		},
		section: {
			type: String
		},
		subjectName: [{
			type: Schema.Types.ObjectId,
			ref: 'subject'
		}]

	},{
    timestamps: true
});

module.exports.class = mongoose.model('class', ClassSchema);