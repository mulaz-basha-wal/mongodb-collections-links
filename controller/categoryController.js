const Category = require("../models/category");

exports.createCategory = (req, res) => {
  const { name, desc } = req.body;
  new Category({ name, desc }).save((error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ message: "Category created" });
    }
  });
};

exports.readCategories = (req, res) => {
  Category.find((error, categories) => {
    if (error) {
      res.json(error);
    } else {
      res.json(categories);
    }
  });
};

exports.updateCategory = (req, res) => {
  Category.findByIdAndUpdate(req.params.id, req.body, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ status: `Category with _id ${req.params.id} is updated` });
    }
  });
};

exports.deleteCategory = (req, res) => {
  Category.findByIdAndDelete(req.params.id, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ status: `Category with id ${req.params.id} is deleted` });
    }
  });
};
