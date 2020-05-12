var fs = require('fs');

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

module.exports.list = function (req, res) {
  var posts
  postlist = []
  fs.readFile('api/models/posts.json', (err, data) => {
    if (err) throw err;
    posts = JSON.parse(data)
    posts.forEach(userPosts => {
      userPosts.posts.forEach(post => {
        post.userId = userPosts.userId
        postlist.push(post)

      })
    })
    shuffle(postlist)
    res.status(200).json(postlist);
  })
};

module.exports.one = function (req, res) {
  var user;
  let id = req.params.id
  fs.readFile('api/models/posts.json', (err, data) => {
    if (err) throw err;
    posts = JSON.parse(data)
    post = posts.find(p => p.userId == id);
    res.status(200).json(post)
  })
};

Date.prototype.formatMDYYYY = function () {
  return (this.getMonth() + 1) +
    "/" + this.getDate() +
    "/" + this.getFullYear();
}

module.exports.add = function (req, res) {
  
  let id = req.params.id
  let post = {
    id: undefined,
    content: req.body._content,
    date: new Date().formatMDYYYY(),
    comments: []
  }
  fs.readFile('api/models/posts.json', (err, data) => {
    if (err) throw err;
    postsData = JSON.parse(data)
    postList = postsData.find(p => p.userId == id);
    post.id = postList.posts.length + 1;
    postList.posts.push(post)
    postsData[id - 1] = postList
    fs.writeFile('api/models/posts.json', JSON.stringify(postsData), () => {
      res.status(201).json(postList)
      console.log(postList)
    })
  })
};


module.exports.addcomment = function (req, res) {

  let uid = req.params.uid
  let pid = req.params.pid
  let comment = {
    content: req.body.content,
    author: req.body.author
  }
  fs.readFile('api/models/posts.json', (err, data) => {
    if (err) throw err;
    postsData = JSON.parse(data)
    postList = postsData.find(p => p.userId == uid);
    post = postList.posts.find(p => p.id == pid);
    post.comments.push(comment)
    postList.posts[pid - 1] = post
    postsData[uid - 1] = postList
    res.status(201).json(postsData)
    fs.writeFile('api/models/posts.json', JSON.stringify(postsData), () => {
      res.status(201).json(post.comments)
    })
  })
};