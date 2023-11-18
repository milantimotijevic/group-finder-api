const pack = require('../../../package.json');

const applyRoutes = (app) => {
    app.get(
        '/health',
        async (req, res, next) => {
            try {
                return res.json({
                    server: 'up',
                    service: 'Group Finder Api',
                    version: pack.version,
                });
            } catch (err) {
                console.log(err);
                return next(err);
            }
        }
    )
};

module.exports = {
    applyRoutes,
};