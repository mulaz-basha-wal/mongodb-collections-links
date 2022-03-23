var express = require("express");
var router = express.Router();
const productController = require("../controller/productController");

router.post("/", productController.createProduct);
router.get("/", productController.readProducts);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);
router.get("/productsearch/byname/:name", productController.getProductByName);
router.get(
  "/productsearch/byprice/:price",
  productController.getProductByPrice
);
router.get(
  "/productsearch/byavail/:availability",
  productController.getProductByAvailability
);
module.exports = router;
