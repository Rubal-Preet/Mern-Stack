const mongoose = require("mongoose");
const Schema= mongoose.Schema
const UserSchema = new Schema({
    firstname: {
        type:String
    },
    lastname: {
        type: String
    },
    email :{
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        dafault: Date.now
    }
})

module.exports = User = mongoose.model('users' , UserSchema)