const express = require('express');
const router = express.Router();
const student = require('../services/student');

router.get('/', (_, res) =>
  student.getAll()
    .then(data => res.send(data))
    .catch(() => res.sendStatus(500))
);

router.post('/', (req, res) =>
  student.create(req.body)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(500))
);

router.put('/:id', (req, res) =>
  student.update(req.params.id, req.body)
    .then(data => res.send(data))
    .catch(() => res.sendStatus(500))
);

router.post('/:id/courses', (req, res) =>
  student
    .clearCourses(req.params.id)
    .then(() => student.setCourses(req.params.id, req.body))
    .then(() => student.getById(req.params.id))
    .then(data => res.send(data))
);

module.exports = router;