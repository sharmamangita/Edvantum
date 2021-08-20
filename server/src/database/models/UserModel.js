let mongoose = require('mongoose');
const Schema = mongoose.Schema

let UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userRole:{  // superAdmin, admin
        type: String
    }
},{
    timestamps: true
});

module.exports.User = mongoose.model('User', UserSchema);