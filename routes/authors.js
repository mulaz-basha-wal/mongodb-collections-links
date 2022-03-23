var express = require("express");
var router = express.Router();
const authorController = require("../controller/authorController");

router.get("/", authorController.readAuthors);
router.post("/", authorController.createAuthor);
router.put("/:id", authorController.updateAuthor);
router.delete("/:id", authorController.deleteAuthor);
module.exports = router;
