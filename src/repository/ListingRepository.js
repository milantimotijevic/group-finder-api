const mongoose = require('./connectMongoose');
const Boom = require('@hapi/boom');

const model = mongoose.model('Listing');

const getListings = async (locationId, category) => {
    if (!locationId) {
        throw new Boom.badData('Must provide location ID in order to fetch a list of listings');
    }

    const listings = await model.find({
        location: locationId,
        category,
    });

    return listings;
};

const getListingById = async (id) => {
    const listing = await model.findById(id);
    return listing;
};

const createListing = async (locationId, listingPayload) => {
    if (!locationId) {
        throw new Boom.badData('Must provide location ID in order to create a listing');
    }

    const listing = await model.create({
        ...listingPayload,
        location: locationId,
    });

    return listing;
};

module.exports = {
    getListings,
    getListingById,
    createListing,
};