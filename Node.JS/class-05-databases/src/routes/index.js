const { Router } = require('express');
const router = Router();
const controllers = require ('../../controllers');

router.get('/', controllers.read);
router.post('/', controllers.create);
router.put('/', controllers.update);
router.delete('/', controllers.delete);


module.exports = router;