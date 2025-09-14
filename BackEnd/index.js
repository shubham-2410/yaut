import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/connect.js';

// Routes
import employeeRoutes from './routes/employee.routes.js';
import customerRoutes from './routes/customer.routes.js';
import bookingRoutes from './routes/booking.routes.js';
import transactionRoutes from './routes/transaction.routes.js';

dotenv.config();

const app = express();
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Hello Buddy!!" });
});

// Routes
app.use("/api/employees", employeeRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/transactions", transactionRoutes);
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () =>
    console.log(`🚀 Server running on http://localhost:${PORT}`)
  );
});
