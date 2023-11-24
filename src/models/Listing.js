const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	name: { type: String },
	category: { type: String },
	location: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' },
}, {
	timestamps: {
		createdAt: 'created_at',
		updatedAt: 'updated_at',
	},
});

schema.index({ location: 1, category: 1, name: 1 });
schema.index({ name: 1, location: 1 });

mongoose.model('Listing', schema);

module.exports = schema;
