const mongoose = require('mongoose');
const { mongodb } = require('../core/parameters');
const { local, port, database, config } = mongodb;

mongoose.connect(`mongodb://${local}:${port}/${database}`, config);

const collection = 'courseCollection';
const schema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
});

module.exports = mongoose.model(collection, schema, collection);