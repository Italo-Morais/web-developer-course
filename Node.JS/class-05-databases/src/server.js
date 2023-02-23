const express = require('express');
const app = express();
const port = 3000;

app.listen(port, console.log('Server is Running on port 3000'));

app.use(express.json());

const routes = require('./routes');
const prisma = require('./databases');
prisma.$connect().then(() => console.log('Database is Connected...'))
.catch((error) => console.error(error));

app.use(routes);