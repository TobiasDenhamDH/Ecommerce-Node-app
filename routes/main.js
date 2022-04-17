let express = require('express');
let mainController = require("../controllers/mainController")
let router = express.Router();

// pagina de todos los productos
router.get('/', mainController.index);

module.exports = router;
