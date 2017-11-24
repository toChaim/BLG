const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      index: { unique: true },
      password: { type: String, required: true },
      varified: { type: Boolean, default: false },
      isAdmin: { type: Boolean, default: false }
    }
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
