import React, { Component } from 'react'
import './styles.css'
import api from '../../services/api'

export default class Todo extends Component {

    const 
    
    constructor(props)
    {
        super(props)
        this.state = {
            tasks: [],
        }
    }

    loadTasks = async () => {
        const response = await api.get('/retrieve')

        this.setState({ tasks: response.data.result }) 
    }

    checkTask = () => {
        
    }

    componentDidMount()
    {
        this.loadTasks()
    }

    render() {
        return (
            <div>
            <h1 className="title">Todo list</h1>
                <form>
                    <input placeholder="Task title" type="text" className="todo-input" />
                    <textarea placeholder="Task description" className="todo-input"></textarea>
                    <button className="todo-button">Save</button>
                </form>
                <ul id="list">
                    {this.state.tasks.map(task => (
                        <li><input type="checkbox" onClick={this.checkTask} /> {task.title}</li>
                    ))}
                </ul>
                <h1 className="title">Done</h1>
                <ul id="done-list">
                    <li><input type="checkbox" checked/> Done task</li>
                    <li><input type="checkbox" checked/> Done number two</li>
                    <li><input type="checkbox" checked/> Aueborissaurisson</li>
                    <li><input type="checkbox" checked/> Do this</li>
                </ul>
            </div>
        )
    }
}
