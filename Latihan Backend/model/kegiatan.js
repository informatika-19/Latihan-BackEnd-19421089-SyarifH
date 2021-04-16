const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const kegiatanSchema = new Schema({
   waktu: {
       type: String
   },
   judul:{
       type: String
   },
   keterangan: {
       type: String
   }
})
module.exports = mongoose.model('kegiatan', kegiatanSchema)