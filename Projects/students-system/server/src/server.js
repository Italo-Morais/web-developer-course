const express = require('express');
const app = express();
const port = 3000;

app.listen(port, console.log('Server is Running'));

app.use(express.json());

const cors = require('cors');
app.use(cors());

const routes = require('./routes');
app.use(routes);

const prisma = require('./database');
prisma.$connect().then(() => console.log('Database is running'))
.catch((error) => console.log(error));