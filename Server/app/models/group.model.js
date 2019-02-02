const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    email: String
});

const GroupSchema = mongoose.Schema({
    users: [UserSchema],

    name: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Groups', GroupSchema);