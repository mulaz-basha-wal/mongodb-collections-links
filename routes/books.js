var express = require("express");
var router = express.Router();
const bookController = require("../controller/bookController");

router.get("/", bookController.readBooks);
router.post("/", bookController.createBook);
router.delete("/:id", bookController.deleteBook);
router.get("/:bookid", bookController.getBookById);
router.get("/authorandcategory", bookController.getBookWithAuthorAndCategory);
module.exports = router;
