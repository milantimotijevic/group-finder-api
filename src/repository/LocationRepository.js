const mongoose = require('./connectMongoose');
const Boom = require('@hapi/boom');

const model = mongoose.model('Location');

const getLocationsByRegionId = async (regionId) => {
    const locations = await model.find({
        region: regionId,
    });

    return locations;
};

const getLocationById = async (id) => {
    const location = await model.findById(id);

    return location;
};

const createLocation = async (regionId, regionPayload) => {
    if (!regionId) {
        throw new Boom.badData('Must provide region ID in order to create a location');
    }

    const location = await model.create({
        ...regionPayload,
        regionId,
    });

    return location;
};

module.exports = {
    getLocationsByRegionId,
    getLocationById,
    createLocation,
};