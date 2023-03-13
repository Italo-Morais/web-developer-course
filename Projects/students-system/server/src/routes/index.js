const { Router } = require('express');
const router = Router();

const controllers = require('../controllers');

router.get('/students', controllers.read);
router.post('/students', controllers.create);
router.put('/students/:id', controllers.update);
router.delete('/students/:id', controllers.delete);

module.exports = router;