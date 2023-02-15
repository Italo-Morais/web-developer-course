const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('Class-03-Params');
});

// Routes Params

// router.get('/user/:id/:name', (req, res) => {
//     const { id, name } = req.params;
//     res.send(`User ${id} Nome: ${name}`);
// });

// router.get('/contact', (req, res) => {
//     res.send('Contato');
// });

// Query Params = http://localhost:3000/?id=1&name=João

// router.get('/user', (req, res) => {
//     const { id, name } = req.query;
//     res.send(`User ${id} Nome: ${name}`);
// });

// Body Params = http://localhost:3000/?id=1&name=João

router.post('/user', (req, res) => {
    const { id, name, age } = req.body;
    // res.send(`User ${id} Nome: ${name}`);
    res.json({ id, name, age });
    
});

module.exports = router;