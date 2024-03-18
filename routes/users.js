'use strict';

import express from 'express';
// import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

//Mock Database
let users = [];

//Getting the list of users from mock database

// Configure body-parser middleware
// router.use(bodyParser.json());

// GET /users - find all users
router.get('/', (req, res) => {
    res.send(users);
});

export default router