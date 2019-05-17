const express = require('express');
const app = express();

const student = require('./routes/student');
const course = require('./routes/course');

app.use(express.json());

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/students', student);
app.use('/courses', course);

module.exports = app;