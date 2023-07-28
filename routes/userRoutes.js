const express = require('express');
const { createUser, getAllUsers, getSingleUser,updateUser} = require('../controllers/userCtrl');

const router = express.Router()

router.post('/create-user',createUser);

router.get('/get-users',getAllUsers);

router.get('/get-users/:id',getSingleUser);

router.put('/update-user/:id',updateUser)

module.exports = router;