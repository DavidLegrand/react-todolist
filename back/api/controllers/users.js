var fs = require('fs');

/* Returns multiple users */
module.exports.list = function (req, res) {
  var users;
  var filterMethod;
  fs.readFile('api/models/users.json', (err, data) => {
    if (err) throw err;
    users = JSON.parse(data)
    if (Object.keys(req.query).length > 0) {
      for ([key, value] of Object.entries(req.query)) {
        /* Get users by minBirthDate */
        if (key === 'minBirthDate') {
          filterMethod = user => {return Date.parse(user.birthDate) >= Date.parse(value)}
        }
        /* Get users by maxBirthDate */
        else if (key === 'maxBirthDate') {
          filterMethod = user => {return Date.parse(user.birthDate) <= Date.parse(value)}
        }
        /* Get users by anything */
        else {
          regex = new RegExp("^" + value, "i")
          filterMethod = user => { return user[key].match(regex) }
        }
        users = users.filter(filterMethod)
      }
    }
    res.status(200).json(users);
  })
};

/* Returns a single user by id */
module.exports.one = function (req, res) {
  var user;
  let id = req.params.id
  fs.readFile('api/models/users.json', (err, data) => {
    if (err) throw err;
    users = JSON.parse(data)
    user = users.find(u => u.id == id);
    res.status(200).json(user);
  })
};