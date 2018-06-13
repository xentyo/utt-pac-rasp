const task = require("../models").Task;
module.exports = {
  index(req, res) {
    var tasks = task.all();
    res.render("tasks", {
      list: tasks
    })
  },
  store(req, res) {
      var task = Task.insert({
          text: req.body.text
      })
      res.render('task', {
          obj: task
      })
  },
  show(req, res) {
      var task = Task.find({
          id: req.id
      })
      res.render('task', {
          obj: task
      })
  }
};
