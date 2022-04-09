let express = require('express');
let searchController = require("../controllers/search-resultController")
let router = express.Router();

/* GET home page. */
router.get('/', searchController.index);

module.exports = router;
