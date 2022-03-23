var express = require("express");
var router = express.Router();
var userController = require("../controller/userController");
/* GET users listing. */
router.post("/", userController.createUser);
router.get("/", userController.readUsers);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.get("/:id", userController.getUserById);
router.get("/byusername/:username", userController.getUserByUsername);
router.get("/byname/:name", userController.getUserByName);
router.get("/bydob/:dob", userController.getUserByDOB);
router.get("/bypassword/:password", userController.getUserByPassword);

module.exports = router;
