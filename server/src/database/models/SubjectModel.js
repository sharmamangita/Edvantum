let mongoose = require('mongoose');
const Schema = mongoose.Schema

let SubjectSchema = new Schema({
		subjectName: {
        type: String,
    }
},{
    timestamps: true
});

module.exports.subject = mongoose.model('subject', SubjectSchema);