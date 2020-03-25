import React, { Component } from 'react'
import './styles.css'

export default class Todo extends Component {
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
                    <li><input type="checkbox" /> Testing task</li>
                    <li><input type="checkbox" /> Task number two</li>
                    <li><input type="checkbox" /> Another one bites the dust</li>
                    <li><input type="checkbox" /> Eat hamburgers</li>
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
