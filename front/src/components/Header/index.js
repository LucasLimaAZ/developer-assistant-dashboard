import React, { Component } from 'react'
import './styles.css'

export default class Header extends Component {
    render() {
        return (
            <header className="main-header">
                <div className="row">
                    <div className="welcome col-md-2">
                        <span>Welcome User</span>
                    </div>
                    <div className="col-md-10">
                        <ul>
                            <li><a class="active" href="#">Home</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">About</a></li>
                            <h3>Developer Assistant Dashboard</h3>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}
