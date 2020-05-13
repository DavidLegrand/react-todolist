var express = require('express');
var router = express.Router();

var ctrlUser = require('../controllers/users');
var ctrlPost = require('../controllers/posts');
var ctrlLike = require('../controllers/likes');
var ctrlFriend = require('../controllers/friends');

/* users : all / one */
router.get('/users', ctrlUser.list);
router.get('/users/:id', ctrlUser.one);

/* posts : all, from 1 user */
router.get('/posts', ctrlPost.list);
router.get('/users/:id/posts', ctrlPost.one);
/* posts add + comment add */
router.post('/users/:id/posts', ctrlPost.add)
router.post('/users/:uid/posts/:pid/comments', ctrlPost.addcomment)

/* newsfeed */
router.get('/users/:id/newsfeed', ctrlPost.newsfeed);

/* likes : all, from 1 user */
router.get('/likes', ctrlLike.list);
router.get('/users/:id/likes', ctrlLike.one);

/* friends : get from 1 user, add for 1 user */
router.get('/users/:id/friends', ctrlFriend.one);
router.post('/users/:id/friends', ctrlFriend.add)

module.exports = router;
