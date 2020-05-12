var express = require('express');
var router = express.Router();

var ctrlUser = require('../controllers/users');
var ctrlPost = require('../controllers/posts');
var ctrlLike = require('../controllers/likes');
var ctrlFriend = require('../controllers/friends');

router.get('/users', ctrlUser.list);
router.get('/users/:id', ctrlUser.one);

router.get('/posts', ctrlPost.list);
router.get('/users/:id/posts', ctrlPost.one);
router.post('/users/:id/posts', ctrlPost.add)
router.post('/users/:uid/posts/:pid/comments', ctrlPost.addcomment)

router.get('/likes', ctrlLike.list);
router.get('/users/:id/likes', ctrlLike.one);

router.get('/users/:id/friends', ctrlFriend.one);
router.post('/users/:id/friends', ctrlFriend.add)

module.exports = router;
