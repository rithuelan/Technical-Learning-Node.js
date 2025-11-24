exports.getUsers = (req, res) => {
  res.json({
    message: "List of all users",
    users: ["User1", "User2"]
  });
};

exports.createUser = (req, res) => {
  const { name } = req.body;

  res.json({
    message: "User created successfully",
    user: name
  });
};
