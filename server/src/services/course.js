const Course = require('../models/course');

const getById = id => Course.findById(id).exec();

const getAll = () => Course.find().exec();

const create = data => new Course(data).save();

const update = (id, data) => Students.findByIdAndUpdate(id, data, { new: true });

module.exports = { getAll, getById, create, update };