'use strict';

import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

//Mock Database
let users = [];

//Getting the list of users from mock database

// Configure body-parser middleware
// router.use(bodyParser.json());

//Commit #1
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

//Commit #3
//GET /users/:id - finds a specific user
router.get('/:id', (req,res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id)

    res.send(foundUser)
});

//Commit #4

//DELETE /users/:id - deletes a specific user
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id)

    //IMPORTANT!!! To access the actual id in postman is to change (') to backticks (`)
    res.send(`${id} deleted successfully from database`);
});



export default router