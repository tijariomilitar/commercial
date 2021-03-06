const router = require("express").Router();

const adminController = require('../controller/admin');
const userController = require('../controller/user');

router.get("/", adminController.index);

router.get("/product", adminController.product);

router.get("/user", adminController.user);

module.exports = router;