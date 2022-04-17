let express = require('express');
let userController = require("../controllers/userController")
let router = express.Router();

// registro de usuario
router.get('/', userController.register);

// login de usuario
router.get('/login', userController.login);

// perfil de usuario
router.get('/profile', userController.profile);

// editar perfil de usuario
router.get('/profileedit', userController.profileEdit);

module.exports = router;