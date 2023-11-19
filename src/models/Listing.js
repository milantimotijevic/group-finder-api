const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	name: { type: String },
	location: { type: String },
}, {
	timestamps: {
		createdAt: 'created_at',
		updatedAt: 'updated_at',
	},
});

mongoose.model('Listing', schema);

module.exports = schema;
