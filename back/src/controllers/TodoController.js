const TodoModel = require("../models/Todo")

module.exports = {

    create: (req, res) => {
        let task = new TodoModel({
            title: req.body.title,
            description: req.body.description,
        })

        task.save()
        .then(result => {
            res.json({ success: true, result: result })
        })
        .catch(err => {
            res.json({ success: false, result: err })
        })
    },

    update: (req, res) => {
        TodoModel.update({_id: req.body._id}, req.body)
        .then(user => {
            if(!user) res.json({ success: false, result: "Task does not exists." })

            res.json(user)
        })
        .catch(err => {
            res.json({ success: false, result: err })
        })
    },

    retrieve: (req, res) => {
        if(req.params.id){
            TodoModel.find({_id: req.params.id})
            .then(result => {
                if(!result) res.json({ success: false, result: "No results found." })
    
                res.json({ success: true, result: result })
            })
            .catch(err => res.json({ success: false, result: err }))
        }
        else{
            TodoModel.find()
            .then(result => {
                if(!result) res.json({ success: false, result: "No results found." })
    
                res.json({ success: true, result: result })
            })
            .catch(err => res.json({ success: false, result: err }))
        }
            
    },

    delete: (req, res) => {
        TodoModel.deleteOne({ "_id" : req.body._id })
        .then(result => {
            if(!result) res.json({ success: false, result: "No task found with the specified Id." })

            res.json({ success: true, result: result })
        })
        .catch(err => res.json({ success: false, result: err }))
    }

}