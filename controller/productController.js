const Product = require("../models/product");

exports.createProduct = (req, res) => {
  new Product(req.body).save((error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ message: "Product created" });
    }
  });
};

exports.readProducts = (req, res) => {
  Product.find((error, products) => {
    if (error) {
      res.json(error);
    } else {
      res.json(products);
    }
  });
};

exports.updateProduct = (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ status: `Product with _id ${req.params.id} is updated` });
    }
  });
};

exports.deleteProduct = (req, res) => {
  Product.findByIdAndDelete(req.params.id, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ status: `Product with id ${req.params.id} is deleted` });
    }
  });
};

exports.getProductByName = (req, res) => {
  Product.find({ name: req.params.name }).exec((error, products) => {
    if (error) {
      res.json(error);
    } else {
      res.json(products);
    }
  });
};

exports.getProductByPrice = (req, res) => {
  Product.find()
    .where("price")
    .gte(parseInt(req.params.price))
    .exec((error, products) => {
      if (error) {
        res.json(error);
      } else {
        res.json(products);
      }
    });
};

exports.getProductByAvailability = (req, res) => {
  Product.find()
    .where("availability")
    .equals(req.params.availability)
    .exec((error, products) => {
      if (error) {
        res.json(error);
      } else {
        res.json(products);
      }
    });
};
