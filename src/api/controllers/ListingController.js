const ListingService = require('../../service/ListingService')

const applyRoutes = (app) => {
    app.get(
        '/listing',
        async (req, res, next) => {
            try {
                const listings = await ListingService.getListings();
                return res.json(listings);
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