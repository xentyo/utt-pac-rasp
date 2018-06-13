var express = require('express');
var router = express.Router();
var task_controller = 
require('../controllers/taskController.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/task', task_controller.show)
router.get('/tasks', task_controller.index)
router.post('/task/store', task_controller.store)

module.exports = router;
