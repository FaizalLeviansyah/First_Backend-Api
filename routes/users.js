'use strict';

import express from 'express';
import { v4 as uuidv4 } from 'uuid';

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

//Commit #2
// POST /user - creates all user
router.post('/', (req, res) => {
    const user = req.body;
    console.log(user)

    users.push({ ...user, id: uuidv4() });

    res.send(`${user.first_name} has been added to Database`);
});

export default router