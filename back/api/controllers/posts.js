var fs = require('fs');

const shuffle = array => {
  array.sort(() => Math.random() - 0.5);
}

const orderByDate = array => {
  array.sort(() => Math.random() - 0.5);
}

/* All posts */
module.exports.list = (req, res) => {
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
    res.status(200).json(postlist);
  })
};

/* Get single post from user */
module.exports.one = (req, res) => {
  let id = req.params.id
  fs.readFile('api/models/posts.json', (err, data) => {
    if (err) throw err;
    posts = JSON.parse(data)
    post = posts.find(p => p.userId == id);
    res.status(200).json(post)
  })
};

module.exports.newsfeed = (req, res) => {

  let userId = +req.params.id
  var meAndFriends;
  var newsfeed = []
  fs.readFile('api/models/friends.json', (err, data) => {
    if (err) throw err;
    friends = JSON.parse(data)
    meAndFriends = [userId]
    friends.map(userFriend => {
      if (userFriend.userId === userId) {
        userFriend.friends.map(f => meAndFriends.push(f.id))
      }
    });
    fs.readFile('api/models/posts.json', (err, data) => {
      if (err) throw err;
      posts = JSON.parse(data)
      posts.map(userPosts => {
        if (meAndFriends.includes(userPosts.userId)) {
          userPosts.posts.map(p => p.userId = userPosts.userId)
          newsfeed.push(...userPosts.posts)
        }
      })
      newsfeed.sort((a,b) => new Date(b.date) - new Date(a.date))
      res.status(200).json(newsfeed);
      console.log(newsfeed)
    })

  })
  /*
    
    */
}

Date.prototype.formatMDYYYY = () => {
  return (this.getMonth() + 1) +
    "/" + this.getDate() +
    "/" + this.getFullYear();
}

module.exports.add = (req, res) => {

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


module.exports.addcomment = (req, res) => {

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