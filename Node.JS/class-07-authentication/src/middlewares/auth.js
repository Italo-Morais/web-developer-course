const jwt = require("jsonwebtoken");
const { secret } = require("../configs/auth.json");
module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: "No token provided" });
  jwt.verify(token, secret, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Token is not valid" });
    req.userID = decoded.id;
  });
  next();
};
