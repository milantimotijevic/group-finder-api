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
    );

    app.post(
        '/listing',
        async (req, res, next) => {
            try {
                const listing = await ListingService.createListing(req.body);
                return res.json(listing);
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