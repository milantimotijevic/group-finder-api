const mongoose = require('./connectMongoose');

const model = mongoose.model('Listing');

const getListings = async () => {
    const listings = await model.find({});

    return listings;
};

const getListingById = async (id) => {
    const listing = await model.findById(id);
    return listing;
};

const createListing = (listingParam) => {
    return model.create(listingParam)
};

module.exports = {
    getListings,
    getListingById,
    createListing,
};