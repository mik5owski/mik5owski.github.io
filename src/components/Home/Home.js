import React, { Component } from "react"
import photo from './computer.jpeg'
import ballImage from './ball.jpeg'
import './Home.css'

class Home extends Component {

    render() {
        return (
            <div className="home-wrapper">
                <div className="image-wrapper">
                    <img className="photo" src={photo} alt="Mikołaj"></img>
                </div>
                <div className="text-wrapper">
                    <h3 className="greeting">Hello there! I'm Nicolas, a <strong className="important">Front-End dev</strong> with educational background in mechatronics.</h3>
                    <h4 className="about">I turned to programming last year and decided to focus on it more this year. I was always on and off with programming thanks to my dad being a programmer and me using my own programs during my studies. But only last year when he gave me a book on JavaScript and I created my first little game, I knew this is it. I enrolled in infoShare Academy where they taught me a lot about building web pages, apps and games, using React, incorporating REST, AJAX, Redux, TypeScript, working with GIT and all that good jazz. Now that I'm finished with studying all of it, I think it's time to put that knowledge to use, so if you are intrested in working with me or me working for you, please be my guest and reach out. I'm looking forward to hearing from you.</h4>
                </div>
                <div className="hobbies-wrapper">
                    <div className="hobby">
                        <div className="hobby-description">
                            <div className="hobby-description-text">
                                Lorem ipsum
                            </div>
                            <div className="hobby-description-button">
                                <button>GO TO SiTE</button>
                            </div>
                        </div>
                        <div className="hobby-image-wrapper">
                            <img className="hobby-image" src={ballImage}>
                            </img>
                        </div>
                    </div>
                    <div className="hobby">
                        <div className="hobby-image-wrapper">
                            <img className="hobby-image" src={ballImage}>
                            </img>
                        </div>
                        <div className="hobby-description">
                            <div className="hobby-description-text">
                                Lorem ipsum
                            </div>
                            <div className="hobby-description-button">
                                <button>GO TO SiTE</button>
                            </div>
                        </div>
                    </div>
                    <div className="hobby">
                        <div className="hobby-description">
                            <div className="hobby-description-text">
                                Lorem ipsum
                            </div>
                            <div className="hobby-description-button">
                                <button>GO TO SiTE</button>
                            </div>
                        </div>
                        <div className="hobby-image-wrapper">
                            <img className="hobby-image" src={ballImage}>
                            </img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home