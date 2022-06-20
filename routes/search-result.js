let express = require('express');
let searchController = require("../controllers/search-resultController")
let router = express.Router();
let path = require('path');
// resultados de busqueda estatico
router.get('/search', searchController.index);

module.exports = router;
