const kegiatanModel = require ('../model/kegiatan')
const objectId = require ('mongoose').Types.ObjectId

exports.simpankegiatan = (data)=>
new Promise ((resolve, reject)=>{
    kegiatanModel.create(data)
    .then(()=>{
        resolve({
            sukses: true,
            pesan: 'Berhasil Input Kegiatan'
        })
    }).catch(()=>{
        reject({
            sukses: false,
            pesan: 'Gagal Input Kegiatan'
        })
    })
})

exports.tampilkegiatan = () =>
new Promise ((resolve, reject) => {
    kegiatanModel.find()
    .then(data => {
        resolve({
            sukses: true,
            pesan: 'Berhasil Membuat Data',
            data: data
        })
    }).catch(() =>{
        reject({
            sukses: false,
            pesan: 'Gagal Membuat Data',
            data: []
        })
    })
})

exports.edit = (data, id) =>
new Promise ((resolve, reject) =>{
    kegiatanModel.updateOne({
        _id: objectId(id)
    }, data).then(()=>{
        resolve({
            sukses: true,
            pesan : 'Berhasil Mengubah Data'
        })
    }).catch(() =>{
        reject({
            sukses: false,
            pesan: 'Gagal Mengubah Data'
        })
    })
})
exports.tampilkanSatuData = (id) =>
new Promise((resolve, reject)=>{
    kegiatanModel.findOne({
        _id: objectId(id)
    }).then((data) =>{
        resolve(data)
    }).catch(() => reject({
        sukses: false,
        pesan : 'Gagal Membuat Data'
    }))
})

exports.delete = (id) =>
new Promise((resolve, reject)=>{
    kegiatanModel.deleteOne({
        _id: objectId(id)
    }).then(() =>{
        resolve({
            sukses: true,
            pesan : 'Berhasil Menghapus Data'
        })
    }).catch(() =>{
        reject({
            sukses: false,
            pesan: 'Gagal Menghapus Data'
        })
    })
})