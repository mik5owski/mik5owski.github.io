import React, { Component } from "react"
import { NavLink } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {

    render() {
        return (
            <div className="nav-wrapper">
                <nav className="navbar">
                    <span className="title">
                        <NavLink className="name" activeClassName="active" exact to="/">Mikołaj Piątkowski</NavLink>
                        <p className="subtitle">/Front-End Developer</p>
                    </span>
                    <ul className="navbar-list">
                        <li className="navbar-list-item"><NavLink className="home" activeClassName="active" exact to="/">About</NavLink></li>
                        <li className="navbar-list-item">
                            <NavLink className="projects" activeClassName="active" exact to="/Projects">Projects</NavLink>
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