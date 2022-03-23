var express = require("express");
var router = express.Router();
const categoryController = require("../controller/categoryController");

router.get("/", categoryController.readCategories);
router.post("/", categoryController.createCategory);
router.put("/:id", categoryController.updateCategory);
router.delete("/:id", categoryController.deleteCategory);
module.exports = router;
