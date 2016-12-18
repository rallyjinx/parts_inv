'use strict';
const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcrypt');

router.post('/users', (req, res, next) => {
  bcrypt.hash(req.body.password, 12)
    .then((hashedPassword) => {
      const user = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        digest: hashedPassword
      };

      knex('users').insert(user)
        .returning(['id', 'first_name', 'last_name', 'email'])
        .then((users) => {
          res.send({
            id: users[0].id,
            email: users[0].email,
            first_name: users[0].first_name,
            last_name: users[0].last_name
          });
        });
    });
});
module.exports = router;
