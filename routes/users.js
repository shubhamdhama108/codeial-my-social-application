const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller');
const postsController = require('../controllers/posts_controller');
console.log('users loaded'); 

router.get('/profile',usersController.profile);
router.get('/posts',postsController.posts);

module.exports = router;