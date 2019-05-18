const Students = require('../models/student');

const getById = id => Students.findById(id).populate('courses').exec();

const getAll = () => Students.find().populate('courses').exec();

const create = data => new Students(data).save();

const update = (id, data) => Students.findByIdAndUpdate(id, data, { new: true });

const addCourse = (_id, idCourse) => Students.updateOne({ _id }, { $addToSet: { courses: idCourse } }, { new: true });

module.exports = { getAll, getById, create, update, addCourse };