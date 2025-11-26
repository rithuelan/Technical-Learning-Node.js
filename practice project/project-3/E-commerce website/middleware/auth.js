module.exports = (req, res, next) => {
  if (!req.cookies.user) {
    return res.status(401).send("Please login first");
  }
  next();
};
