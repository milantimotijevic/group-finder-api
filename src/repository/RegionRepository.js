const mongoose = require('./connectMongoose');

const model = mongoose.model('Region');

const getRegions = async () => {
    const regions = await model.find({});

    return regions;
};

const getRegionById = async (id) => {
    const region = await model.findById(id);

    return region;
};

const createRegion = async (regionParam) => {
    const region = await model.create(regionParam);

    return region;
};

module.exports = {
    getRegions,
    getRegionById,
    createRegion,
};