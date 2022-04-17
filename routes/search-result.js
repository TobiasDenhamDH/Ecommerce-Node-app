let express = require('express');
let searchController = require("../controllers/search-resultController")
let router = express.Router();

// resultados de busqueda estatico
router.get('/', searchController.index);

module.exports = router;
