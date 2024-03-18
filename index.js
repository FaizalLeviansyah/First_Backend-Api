'use strict';

import bodyParser from 'body-parser';
import express from 'express';

import userRoutes from './routes/users.js';

const app = express();
const PORT = 5000

app.use(bodyParser.json());
app.use('/users', userRoutes);

//GET METHOD
app.get('/', (req, res) => {
    console.log('[GET ROUTE]');
    res.send('HELLO FROM HOMEPAGE');
})

app.listen(PORT, () => console.log('Server running on port: http://localhost:5000'));