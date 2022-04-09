let express = require('express');
let usersController = require("../controllers/usersController")
let router = express.Router();

/* GET home page. */
router.get('/', usersController.index);

module.exports = router;