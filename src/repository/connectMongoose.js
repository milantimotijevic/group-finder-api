const mongoose = require('mongoose');
const Logger = require('../util/Logger');
require('../models/Region');
require('../models/Location');
require('../models/Listing');

const { MONGO_CONNECTION_STRING } = process.env;

mongoose.connect(MONGO_CONNECTION_STRING).then(() => {
	Logger.info('Connected to MongoDB');
});

module.exports = mongoose;
