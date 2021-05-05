const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, uniqure: true},
    password: {type: String, required: true, uniqure: true},
    chargeType: {type: String, required: true, uniqure: true},
    chargeName: {type: String, required: true, uniqure: true},
}, {collection:'users'})

const model = mongoose.Model('UserSchema', UserSchema)

module.exports = model