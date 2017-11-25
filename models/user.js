const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

userSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.hash(user.password, 14).then(
    hashedPassword => {
      user.password = hashedPassword;
      next();
    },
    err => next(err)
  );
});

userSchema.methods.comparePassword = function(candidatePassword, next) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) {
      return next(err);
    }
    next(null, isMatch);
  });
};

const User = mongoose.model('User', userSchema);

module.exports = User;
