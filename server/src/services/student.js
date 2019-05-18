const Students = require('../models/student');

const getById = id => Students.findById(id).populate('courses').exec();

const getAll = () => Students.find().populate('courses').exec();

const create = data => new Students(data).save();

const update = (id, data) => Students.findByIdAndUpdate(id, data, { new: true });

const clearCourses = _id => Students.updateOne({ _id }, { courses: [] });

const setCourses = (_id, courses) => Students.updateOne({ _id }, { $addToSet: { courses } });

module.exports = { getAll, getById, create, update, clearCourses, setCourses };