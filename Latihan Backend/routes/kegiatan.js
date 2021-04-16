const router = require('express').Router()
const kegiatanController = require("../controller/kegiatan")

router.post('/input', (req, res)=>{
    kegiatanController.simpankegiatan(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})

router.get('/tampil', (req, res)=>{
    kegiatanController.tampilkegiatan()
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})
router.put('/edit/:id', (req, res) =>{
    kegiatanController.edit(req.body, req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
router.get('/tampilsingle/:id',(req, res)=>{
    kegiatanController.tampilkanSatuData(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(ress))
})
router.delete('/delete/:id',(req, res)=>{
    kegiatanController.delete(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(ress))
})

module.exports = router