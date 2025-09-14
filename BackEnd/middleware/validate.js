import { ZodError } from "zod";

export const validate = (schema) => (req, res, next) => {
  console.log("Validation");
  try {
    req.body = schema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({ 
        message: "Validation Error",
        errors: error 
      });
    }
    return res.status(500).json({ message: "Unexpected validation error" });
  }
};

