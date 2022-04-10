let express = require('express');
let usersController = require("../controllers/usersController")
let router = express.Router();

/* GET home page. */
router.get('/', usersController.register);

router.get('/login', usersController.login);

router.get('/profile', usersController.profile);

router.get('/profileedit', usersController.profileEdit);

module.exports = router;