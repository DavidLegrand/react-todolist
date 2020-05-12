var fs = require('fs');

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

module.exports.list = function(req, res) {
  var likes
  likelist=[]
  fs.readFile('api/models/likes.json', (err, data) => {
    if (err) throw err;
    likes = JSON.parse(data)
    likes.forEach(userlikes=>{
      userlikes.pages.forEach(like=> {
        like.userId = userlikes.userId
        likelist.push(like)
      
      })
    })
    shuffle(likelist)
    res.status(200).json(likelist);
  })
};

module.exports.one = function(req, res) {
  var user;
  let id = req.params.id
  fs.readFile('api/models/likes.json', (err, data) => {
    if (err) throw err;
    likes = JSON.parse(data)
    like = likes.find(p => p.userId == id);
    res.status(200).json(like)
  })
};