const express = require('express')
const mongoose = require('mongoose')
const app = express()

// Database
mongoose.connect('mongodb://127.0.0.1/dad', { useNewUrlParser: true })
.then(() => { console.log('Connected to database...') })
.catch(err => console.error(err))

// Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
    next()
})
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Controllers
const TodoController = require("./controllers/TodoController")

// Routes
app.post("/create", TodoController.create)
app.put("/update", TodoController.update)
app.get("/retrieve", TodoController.retrieve)
app.delete("/delete", TodoController.delete)

// Start server
app.listen(3001, () => console.log('Server started...'))