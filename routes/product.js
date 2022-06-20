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

// detail product
router.get('/:id', productController.detail);

// agregar nuevo producto
router.get('/add/new', productController.add)
router.post('/add/new', upload.single('image'), productController.store);

/* Eliminar producto */
router.post("/product-delete/:id", productController.delete);

/* Editar producto */
router.get("/product-edit/:id", productController.edit);
router.post("/product-edit/:id/update", upload.single('image'), productController.update);

/* Comentarios y borrar comentarios */

router.post("/:id/comment", productController.comment);
router.post("/delete-comment/:id", productController.deleteComment);

module.exports = router;