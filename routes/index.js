var express = require('express');
var router = express.Router();
var task_controller = 
require('../controllers/taskController.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/task/:id', {
  title: 'Express'
})

router.post('/task/store', {
  title: 'Express'
})

module.exports = router;
