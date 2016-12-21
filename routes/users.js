'use strict';
const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcrypt-as-promised');

router.get('/users', (req, res, next) => {
  console.log('get, hello');
  knex('users')
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/users', (req, res, next) => {
  bcrypt.hash(req.body.password, 12)
    .then((hashedPassword) => {
      return knex('users')
        .insert({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          digest: hashedPassword
        }, '*');
    })
    .then((users) => {
      const user = users[0];
      delete user.digest;
      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/users/:id', (req, res, next) => {
  knex('users')
    .where('id', req.params.id)
    .then((user) => {
      knex('users')
        .where('id', req.params.id)
        .del()
        .then(() => {
          delete user.id;
          res.send(user);
        })

    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
// const user = {
//   first_name: req.body.first_name,
//   last_name: req.body.last_name,
//   email: req.body.email,
//   digest: hashedPassword
// };

// knex('users').insert(user)
//   .returning(['id', 'first_name', 'last_name', 'email'])
//   .then((users) => {
//     res.send({
//       id: users[0].id,
//       email: users[0].email,
//       first_name: users[0].first_name,
//       last_name: users[0].last_name
//     });
//   });
