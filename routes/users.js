let express = require('express');
let userController = require("../controllers/userController")
let router = express.Router();
let multer = require('multer');
let path = require('path');

// configuracion de multer
let storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null, path.join(__dirname, "../public/images/avatars"))
    },
    filename: function(req,file,cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({storage: storage});

// registro de usuario
router.get('/', userController.register);
router.post('/', upload.single('avatar'), userController.storeRegister);

// login de usuario
router.get('/login', userController.login);
router.post('/login', userController.storeLogin);

// logout de usuario
router.post('/logout', userController.logout);


// perfil de usuario
router.get('/profile/:id', userController.profile);

// editar perfil de usuario
router.get('/profileedit/:id', userController.profileEdit);
router.post('/profileedit', upload.single('avatar'), userController.profileStore)

/* Seguir a un usuario */

router.get('/profile/follower/:id', userController.follow)

module.exports = router;