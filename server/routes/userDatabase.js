const { User, Friends } = require('../../db/index.js');
const { Router } = require('express');
const Data = Router(); //not sure what goes in here...

// still developing sequelize database request structure
Data.get('/user', (req, res) => {
 
  User.findAll().then((results) => {
    console.log('req:', req.body, 'results:', results);
    res.status(200).send(results);
  }).catch((err) => {
    console.log('User Get Data:', err);
    res.status(500);
  });
});



// does this need to be /google?
Data.post('/user', (req, res) => {
  console.log(req.body.name);
  const { name } = req.body;
  User.create({name: name }).then(() => {
    console.log('req:', req.body, 'results:', results);
    res.sendStatus(201);
  }).catch((err) => {
    console.log('User Post Data:', err);
    res.status(404);
  });
});


Data.get('/friends', (req, res) => {
  Friends.findAll().then((results) => {
    console.log(results);
    res.sendStatus(200).send(results);
  }).catch((err) => {
    console.log('Friends Get Data:', err);
    res.status(404);
  });
});




Data.post('/friends', (req, res) => {
  console.log(req.body.name);
  const { friends } = req.body;
  Friends.create({friends: friends }).then(() => {
    //console.log(results);
    res.sendStatus(201);
  }).catch((err) => {
    console.log('Friends Post Data:', err);
    res.status(404);
  });
});


module.exports = { Data };