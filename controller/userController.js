// 4. create a user api.
//    fields are username,name,dob,password
//    you need to create 4 end points
//    post url localhost:3000/user will create user.
//    get url localhost:3000/user -- show all users as json
//    delete url localhost:3000/user/id
//    localhost/user/id -->send json for only that user.
//    put request to modify user.

// make 4 urls to find by username, name,dob and password
// ex
// localhost/dobsearch/:dob
const User = require("../models/user");

exports.createUser = (req, res) => {
  new User(req.body).save((error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ message: "User created" });
    }
  });
};

exports.readUsers = (req, res) => {
  User.find((error, users) => {
    if (error) {
      res.json(error);
    } else {
      res.json(users);
    }
  });
};

exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ status: `User with _id ${req.params.id} is updated` });
    }
  });
};

exports.deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ status: `User with id ${req.params.id} is deleted` });
    }
  });
};

exports.getUserById = (req, res) => {
  User.findById(req.params.id, (error, user) => {
    if (error) {
      res.json(error);
    } else {
      res.json(user);
    }
  });
};

exports.getUserByUsername = (req, res) => {
  User.find({ username: req.params.username }).exec((error, users) => {
    if (error) {
      res.json(error);
    } else {
      res.json(users);
    }
  });
};

exports.getUserByName = (req, res) => {
  User.find({ name: req.params.name }).exec((error, users) => {
    if (error) {
      res.json(error);
    } else {
      res.json(users);
    }
  });
};

exports.getUserByDOB = (req, res) => {
  User.find({ dob: req.params.dob }).exec((error, users) => {
    if (error) {
      res.json(error);
    } else {
      res.json(users);
    }
  });
};

exports.getUserByPassword = (req, res) => {
  User.find({ password: req.params.password }).exec((error, users) => {
    if (error) {
      res.json(error);
    } else {
      res.json(users);
    }
  });
};
