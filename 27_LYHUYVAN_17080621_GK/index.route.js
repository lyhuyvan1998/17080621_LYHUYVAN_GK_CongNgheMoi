const express = require('express');
const router = express.Router();
const Data = require('./aws');

//--------------------------------
module.exports = router; 
//--------------------------------

// get all sinh vien
router.get('/listMayTinh', (req, res) => {
    Data.getAllMayTinh(res); // nhận dữ liệu từ response
})

/// api cho thêm sinh vien
router.post('/addMayTinh', (req , res)=> {
    let STT = req.body.STT;
    let chitiet = req.body.chitiet;
    let gia = req.body.gia;
    let hang = req.body.hang;
    let tenmaytinh = req.body.tenmaytinh;
    Data.addMayTinh(STT , chitiet , gia , hang , tenmaytinh, res);
})  
