const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	name: { type: String, required: true },
	region: { type: mongoose.Schema.Types.ObjectId, ref: 'Region', required: true }
}, {
	timestamps: {
		createdAt: 'created_at',
		updatedAt: 'updated_at',
	},
});

schema.index({ region: 1, name: 1 })

mongoose.model('Location', schema);

module.exports = schema;
