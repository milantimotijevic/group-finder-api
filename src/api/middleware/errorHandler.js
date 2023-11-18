const { isBoom } = require('@hapi/boom');
const Logger = require('../../util/Logger');

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
	if (isBoom(err)) {
		return res.status(err.output.statusCode).send(err.output.payload.message);
	}

	if (err.message.includes('request entity too large') || err.message.includes('request aborted')) {
		return res.status(400).send('Request payload too large');
	}

	Logger.error(`ServerError - GroundFInderApi - Unhandled: ${err}`);
	return res.status(500).send('Internal server error');
}

module.exports = errorHandler;
