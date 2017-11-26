require('dotenv').load();

exports.SECRET_KEY = process.env.SECRET_KEY || 'SECRET_KEY';
exports.PORT = process.env.PORT || 3001;
exports.MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/BLG';
exports.MONGOOSE_DEBUUG = process.env.ENV === 'development';
