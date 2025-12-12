import jwt from "jsonwebtoken";

const SECRET = "mysecretkey";

// Generate token
export const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email },
    SECRET,
    { expiresIn: "1h" }
  );
};

// Middleware for verification
export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token" });

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(403).json({ message: "Invalid token" });
  }
};
