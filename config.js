exports.MONGO_DB = process.env.MONGODB_URI || 'mongodb://localhost/CBT-API';
exports.MONGO_DEBUG = process.env.ENV === 'devolopment';

exports.PORT = process.env.PORT || 8000;
