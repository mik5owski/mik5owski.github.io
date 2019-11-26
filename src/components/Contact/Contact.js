import React, { Component } from "react"
import './Contact.css'
class Contact extends Component {

    render() {
        return (
            <div className="contact-wrapper">
                <div className="contact-content">
                    <ul className="contact-list">
                        <li className="contact-list-item">Email</li>
                        <li className="contact-list-item">Facebook</li>
                        <li className="contact-list-item">Linkedin</li>
                        <li className="contact-list-item">Resume</li>
                    </ul>    
                </div>
            </div>
        )
    }
}

export default Contact