import React, { Component } from 'react'
import Todo from '../Todo'
import './styles.css'

export default class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="row">
                    <div className="todo col-md-3">
                        <Todo />
                    </div>
                </div>
            </div>
        )
    }
}
