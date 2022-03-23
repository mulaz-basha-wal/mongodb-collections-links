const Book = require("../models/book");

exports.createBook = (req, res) => {
  new Book(req.body).save((error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ message: "Book created" });
    }
  });
};
exports.readBooks = (req, res) => {
  Book.find((error, books) => {
    if (error) {
      res.json(error);
    } else {
      res.json(books);
    }
  });
};

exports.updateBook = (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ status: `Book with _id ${req.params.id} is updated` });
    }
  });
};

exports.deleteBook = (req, res) => {
  Book.findByIdAndDelete(req.params.id, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ status: `Book with id ${req.params.id} is deleted` });
    }
  });
};

exports.getBookWithAuthorAndCategory = (req, res) => {
  Book.find()
    .populate("author")
    .populate("category")
    .exec((error, books) => {
      if (error) {
        res.json(error);
      } else {
        res.json(books);
      }
    });
};

exports.getBookById = (req, res) => {
  Book.findById(req.params.bookid, (error, book) => {
    if (error) {
      res.json(error);
    } else {
      res.json(book);
    }
  });
};
