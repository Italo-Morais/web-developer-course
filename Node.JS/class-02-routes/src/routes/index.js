const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.send('Class 02 - Routes')
});

router.get('/users', (req, res) => res.send('Users'));

router.get("/contact", (req, res) =>
  res.send("contato"));

module.exports = router;

