
module.exports = {
  index(req, res) {
    res.render("tasks", {
      list: [
          {
              text:'hola'
          }
      ]
    })
  },
  store(req, res) {
      var t = task.insert({
          text: req.body.text
      })
      res.render('task', {
          obj: {
              text: 'Hola mundo'
            }
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
