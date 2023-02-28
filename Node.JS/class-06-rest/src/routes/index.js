const { Router } = require('express');
const router = Router();
const users = require('../controllers/users');

router.get('/users', users.read);
router.post('/users', users.create);
router.put('/users/:id', users.update);
router.delete('/users/:id', users.delete);

module.exports = router;