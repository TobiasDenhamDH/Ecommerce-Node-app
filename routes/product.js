let express = require('express');
let productController = require("../controllers/productController")
let router = express.Router();

// producto estatico
router.get('/:id?', productController.index);

// agregar nuevo producto
router.get('/add/new', productController.add)

module.exports = router;