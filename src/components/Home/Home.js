import React, { Component } from "react"
import photo from './cat.jpg'
import './Home.css'

class Home extends Component {

    render() {
        return (
            <div className="home-wrapper">
                <div className="image-wrapper">
                    <img className="photo" src={photo} alt="Mikołaj"></img>
                </div>
                <div className="text-wrapper">
                    <h2 className="greeting">Hello there!</h2>
                    <h2 className="introduction">I'm Nicolas and I'm more than happy to welcome you to my portfolio.</h2>
                </div>
            </div>
        )
    }
}

export default Home