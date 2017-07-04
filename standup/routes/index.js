var express = require('express');
var router = express.Router();
var stundupCtrl = require('../controllers/standup.server.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*Get new Note page*/
router.get('/newnote', function(req, res) {
  return stundupCtrl.getNote(req, res);
});

/* POST New Note page. */
router.post('/newnote', function(req, res){
  return stundupCtrl.create(req, res);
});

module.exports = router;
