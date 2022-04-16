let express = require('express');
let productController = require("../controllers/productController")
let router = express.Router();

// producto
router.get('/:id?', productController.prod);

// agregar nuevo productp
router.get('/add/new', productController.add)

module.exports = router;