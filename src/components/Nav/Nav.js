import React, { Component } from "react"
import { NavLink } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {

    render() {
        return (
            <div className="nav-wrapper">
                <nav className="navbar">
                    <span className="title">
                        <NavLink className="name" exact to="/">Mikołaj Piątkowski</NavLink>
                        <p className="subtitle">/Front-End Developer</p>
                    </span>
                    <ul className="navbar-list">
                        <li activeClassName="active" className="navbar-list-item"><NavLink className="home" exact to="/">About</NavLink></li>
                        <li className="navbar-list-item">
                            <NavLink activeClassName="active" className="projects" exact to="/Projects">Projects</NavLink>
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