const { Router } = require('express');
const router = Router();
const users = require('../controllers/users');

router.get('/users', users.read);
router.post('/users', users.create);
router.put('/users/:id', users.update);
router.delete('/users/:id', users.delete);

const loginControllers = require('../controllers/auth');

router.post('/login', loginControllers.auth);

module.exports = router;