var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var booksRouter = require("./routes/books");
var authorRouter = require("./routes/authors");
var categoriesRouter = require("./routes/categories");
var productRouter = require("./routes/products");

var app = express();
let mongoConnUrl = "mongodb://localhost/westagile";
mongoose.connect(mongoConnUrl, { useNewUrlParser: true });
let db = mongoose.connection;
db.on("error", (error) => {
  console.log("Unable to connect to the mongoDB");
  console.log(error);
});
db.on("open", () => {
  console.log("We are connected to the mongoDB server via mongoose");
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/books", booksRouter);
app.use("/authors", authorRouter);
app.use("/categories", categoriesRouter);
app.use("/products", productRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
console.log("Server running...");