let express = require('express');
let productController = require("../controllers/productController")
let router = express.Router();
let multer = require('multer');
let path = require('path');

// configuracion de multer
let storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null, path.join(__dirname, "../public/images/products"))
    },
    filename: function(req,file,cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({storage: storage});

// producto estatico
router.get('/:id?', productController.index);

// agregar nuevo producto
router.get('/add/new', productController.add)
//router.post('/store', productController.store)
router.post('/add/new', upload.single('image'), productController.store);

module.exports = router;