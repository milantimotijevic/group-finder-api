const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	name: { type: String, unique: true },
}, {
	timestamps: {
		createdAt: 'created_at',
		updatedAt: 'updated_at',
	},
});

mongoose.model('Region', schema);

module.exports = schema;
