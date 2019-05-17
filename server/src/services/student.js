const Students = require('../models/student');

const getById = id => Students.findById(id).exec();

const getAll = () => Students.find().exec();

const create = data => new Students(data).save();

const update = (id, data) => Students.findByIdAndUpdate(id, data, { new: true });

module.exports = { getAll, getById, create, update };