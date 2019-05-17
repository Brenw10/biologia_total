const express = require('express');
const router = express.Router();
const course = require('../services/course');

router.get('/', (_, res) =>
  course.getAll()
    .then(data => res.send(data))
    .catch(() => res.sendStatus(500))
);

router.post('/', (req, res) =>
  course.create(req.body)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(500))
);

router.put('/:id', (req, res) =>
  course.update(req.params.id, req.body)
    .then(data => res.send(data))
    .catch(() => res.sendStatus(500))
);

module.exports = router;