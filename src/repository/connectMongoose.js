const mongoose = require('mongoose');
const Logger = require('../util/Logger');
require('../models/Listing');
require('../models/Location');

const { MONGO_CONNECTION_STRING } = process.env;

mongoose.connect(MONGO_CONNECTION_STRING).then(() => {
	Logger.info('Connected to MongoDB');
});

module.exports = mongoose;
