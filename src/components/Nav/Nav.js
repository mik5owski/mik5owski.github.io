import React, { Component } from "react"
import { NavLink } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {

    render() {
        return (
            <div className="wrapper">
                <nav className="navbar">
                    <ul className="navbar-list">
                        <li className="navbar-list-item">
                            <NavLink className="name" exact to="/">Mikołaj Piątkowski</NavLink>
                        </li>
                        <li className="navbar-list-item"><NavLink className="home" exact to="/">Home</NavLink></li>
                        <li className="navbar-list-item">
                            <NavLink className="projects" exact to="/Projects">Projects</NavLink>
                        </li>
                        <li className="navbar-list-item">
                            <a className="resume">Résumé</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav