const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/cars', (_req, res, next) => {
  knex('cars')
    .orderBy('owner')
    .then((cars) => {
      res.send(cars);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/cars/:id', (req, res, next) => {
  knex('cars')
    .where('id', req.params.id)
    .then((car) => {
      res.send(car[0]);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/cars', (req, res, next) => {
  knex('cars')
    .insert({
      owner: req.body.owner,
      year: req.body.year,
      make: req.body.make,
      model: req.body.model,
      vin: req.body.vin
    }, '*')
    .then((cars) => {
      res.send(cars[0]);
    })
    .catch((err) => {
      next(err);
    });
});

router.patch('/cars/:id', (req, res, next) => {
  knex('cars')
    .where('id', req.params.id)
    .first()
    .then((car) => {
      if (!car) {
        return next();
      }
      return knex('cars')
        .update({
          owner: req.body.owner,
          year: req.body.year,
          make: req.body.make,
          model: req.body.model,
          vin: req.body.vin
        }, '*')
        .where('id', req.params.id)
    })
    .then((car) => {
      res.send(car[0]);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/cars/:id', (req, res, next) => {
  knex('cars')
    .where('id', req.params.id)
    .first()
    .then((car) => {
      knex('cars')
        .where('id', req.params.id)
        .del()
        .then(() => {
          delete car.id;
          res.send(car);
        })

    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
