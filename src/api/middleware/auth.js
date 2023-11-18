const Boom = require('@hapi/boom');

const { SECRET_ID, SECRET_KEY } = process.env;

module.exports = () => async (req, res, next) => {
	// TODO remove secrets from body
	return next();
};