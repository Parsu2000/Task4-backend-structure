const userService = require("../services/userService");

const getUsers = (req, res) => {
  const users = userService.fetchAllUsers();
  return res.status(200).json(users);
};

const createUser = (req, res) => {
  const { name, email } = req.body;

  const newUser = userService.createUserRecord({ name, email });

  return res.status(201).json({
    message: "User created successfully",
    user: newUser
  });
};

module.exports = {
  getUsers,
  createUser
};