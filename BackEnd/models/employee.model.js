import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Admin', 'BackDesk', 'Onsite'], // 👈 Only these values allowed
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true,      // 👈 Prevent duplicate usernames
    trim: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    minlength: 6       // 👈 Basic password rule
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive'],
    default: 'Active'
  }
}, {
  timestamps: true // 👈 adds createdAt & updatedAt automatically
});

export const UserModel = mongoose.model('Employee', employeeSchema);
