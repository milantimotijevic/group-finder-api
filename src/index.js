require('dotenv/config');

const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const errorHandler = require('./api/middleware/errorHandler');
const express = require('express');
const controllers = require('./api/controllers');
const Logger = require('./util/Logger');
const pack = require('../package.json');

require('./repository/models')

require('./service/CronService');

if (!process.env.SECRET_ID || !process.env.SECRET_KEY) {
	Logger.warn('SECRET(s) not specified');
}

const PORT = process.env.PORT || 3000;

const app = express();

app.use([
	bodyParser.json({ limit: '50mb' }),
	bodyParser.urlencoded({ extended: true }),
	cors(),
	morgan('tiny'),
]);
controllers.applyAllRoutes(app);
app.use(errorHandler);
app.use(express.static(path.join(__dirname, 'static')));

const server = app.listen(PORT);

server.on('listening', () => {
	console.log(`${pack.name} server listening on port ${PORT}, App version ${pack.version}`);
});
