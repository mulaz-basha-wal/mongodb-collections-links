const Author = require("../models/author");

exports.createAuthor = (req, res) => {
  const { first_name, last_name, dob, dod } = req.body;
  new Author({ first_name, last_name, dob, dod }).save((error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ message: "Author created" });
    }
  });
};
exports.readAuthors = (req, res) => {
  Author.find((error, authors) => {
    if (error) {
      res.json(error);
    } else {
      res.json(authors);
    }
  });
};

exports.updateAuthor = (req, res) => {
  Author.findByIdAndUpdate(req.params.id, req.body, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ status: `Author with _id ${req.params.id} is updated` });
    }
  });
};

exports.deleteAuthor = (req, res) => {
  Author.findByIdAndDelete(req.params.id, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ status: `Author with id ${req.params.id} is deleted` });
    }
  });
};
