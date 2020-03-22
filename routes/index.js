const express = require('express');

const { check, validationResult } = require('express-validator');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('form', { title: 'Registration form' });
});

router.post('/',
  [
    check('name')
      .isLength({ min: 1 })
      .withMessage('Please enter a name'),
    check('email')
      .isLength({ min: 1 })
      .withMessage('Please enter an email'),
  ],
  (req, res) => {
  res.render('form', { title: 'Registration form' });
});

module.exports = router;