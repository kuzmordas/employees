const router = require('express').Router();
const { create, list, remove } = require('./controllers');

router
  .post('/', create)
  .get('/', list)
  .delete('/:id', remove);

module.exports = router;