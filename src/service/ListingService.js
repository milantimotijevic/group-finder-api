const ListingRepository = require('../repository/ListingRepository')

const getListings = ListingRepository.getListings;

const getListingById = ListingRepository.getListingById;

const createListing = ListingRepository.createListing;

module.exports = {
    getListings,
    getListingById,
    createListing,
};