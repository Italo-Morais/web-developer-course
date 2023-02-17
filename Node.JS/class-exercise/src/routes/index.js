const { Router } = require('express');
const router = Router();
const controllers = require('../controllers');

router.post('/user', controllers.create);
router.get('/user', controllers.read);
router.put('/user/:id/:name', controllers.update);
router.delete('/user', controllers.delete);

module.exports = router;

