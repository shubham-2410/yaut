import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // attach decoded payload (id, type)
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

// ✅ Only Admin Middleware
export const onlyAdmin = (req, res, next) => {
  if (req.user?.type !== "Admin") {
    return res.status(403).json({ error: "Only Admin can perform this action" });
  }
  next();
};
