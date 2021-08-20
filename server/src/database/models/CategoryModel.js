let mongoose = require('mongoose');
const Schema = mongoose.Schema

let CategorySchema = new Schema({
		categoryName: {
        type: String,
				requied: true
    },
		/*student: [{
    type: Schema.Types.ObjectId,
    ref: 'students'
		}],*/
		active: {
        type: Boolean,
				default: true,
    }
},{
    timestamps: true
});

module.exports.category = mongoose.model('category', CategorySchema);