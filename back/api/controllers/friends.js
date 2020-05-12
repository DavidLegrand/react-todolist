var fs = require('fs');

module.exports.one = function (req, res) {

  let id = req.params.id
  fs.readFile('api/models/friends.json', (err, data) => {
    if (err) throw err;
    friends = JSON.parse(data)
    friend = friends.find(p => p.userId == id);
    res.status(200).json(friend)
  })
};


module.exports.add = function (req, res) {

  let id = req.params.id
  let friend = {
    id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    profilePic: req.body.profilePic
  }
  fs.readFile('api/models/friends.json', (err, data) => {
    if (err) throw err;
    friendsData = JSON.parse(data)
    friendList = friendsData.find(p => p.userId == id);
    friendList.friends.push(friend)
    friendsData[id - 1] = friendList

    fs.writeFile('api/models/friends.json', JSON.stringify(friendsData), () => {
      res.status(201).json(friendList)
    })
  })


};