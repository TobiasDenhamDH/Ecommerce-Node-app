let express = require('express');
let mainController = require("../controllers/mainController")
let router = express.Router();

/* GET home page. */
router.get('/', mainController.index);

module.exports = router;
