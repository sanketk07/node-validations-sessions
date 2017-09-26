var express = require('express');
var router = express.Router();

/* GET users listing. */
//the url gets appended to '/users' in app.js
//Can also be clubbed by adding the entries in the index file and 
//changing the entries to /users/ and /users/detail/ and 
//copying the below content into index.js file
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/detail', function(req, res, next) {
  res.send('detail');
});

module.exports = router;
