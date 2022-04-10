let express = require('express');
let productController = require("../controllers/productController")
let router = express.Router();

/* GET home page. */
router.get('/', productController.index);

router.get('/add', productController.add)

module.exports = router;