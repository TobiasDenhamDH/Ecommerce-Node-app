let express = require('express');
let userController = require("../controllers/userController")
let router = express.Router();

/* GET home page. */
router.get('/', userController.register);

router.get('/login', userController.login);

router.get('/profile', userController.profile);

router.get('/profileedit', userController.profileEdit);

module.exports = router;