const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/parts', (_req, res, next) => {
  knex('parts')
    .orderBy('car_id')
    .then((parts) => {
      res.send(parts);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/parts/:id', (req, res, next) => {
  knex('parts')
    .where('id', req.params.id)
    .then((part) => {
      res.send(part[0]);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/parts', (req, res, next) => {
  knex('parts')
    .insert({
      car_id: req.body.car_id,
      part_num: req.body.part_num,
      description: req.body.description,
      location: req.body.location
    }, '*')
    .then((parts) => {
      res.send(parts[0]);
    })
    .catch((err) => {
      next(err);
    });
});

router.patch('/parts/:id', (req, res, next) => {
  knex('parts')
    .where('id', req.params.id)
    .first()
    .then((car) => {
      if (!car) {
        return next();
      }
      return knex('parts')
        .update({
          car_id: req.body.car_id,
          part_num: req.body.part_num,
          description: req.body.description,
          location: req.body.location
        }, '*')
        .where('id', req.params.id)
    })
    .then((part) => {
      res.send(part[0]);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/parts/:id', (req, res, next) => {
  knex('parts')
    .where('id', req.params.id)
    .first()
    .then((part) => {
      knex('parts')
        .where('id', req.params.id)
        .del()
        .then(() => {
          delete part.id;
          res.send(part);
        })
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
