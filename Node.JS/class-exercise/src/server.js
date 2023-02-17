const express = require('express');
const app = express();
const port = 3000;

app.listen(port, console.log(`Started server on port ${port} !`));

app.use(express.json());

const router = require('./routes');

app.use(router);


