const ListingRepository = require('../repository/ListingRepository')

const getListings = ListingRepository.getListings;

const createListing = ListingRepository.createListing;

module.exports = {
    getListings,
    createListing,
};