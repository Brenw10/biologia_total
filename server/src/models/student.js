const mongoose = require('mongoose');
const { mongodb } = require('../core/parameters');
const { local, port, database, config } = mongodb;

mongoose.connect(`mongodb://${local}:${port}/${database}`, config);

const collection = 'studentCollection';
const schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  birthday: { type: Date },
});

module.exports = mongoose.model(collection, schema, collection);