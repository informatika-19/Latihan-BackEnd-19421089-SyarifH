const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username:{
        type: String
    },
    namaLengkap:{
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
})
module.exports = mongoose.model('user', userSchema)