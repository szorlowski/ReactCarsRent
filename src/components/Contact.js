import React from 'react';
import '../styles/content.css'

const Contact = props => {
    const isActive = props.contact.active;
    let content;
    if(isActive){
        content = 
        <React.Fragment>
            <h1>Contact</h1>
            <h2>Phone: {props.contact.desc.phone}</h2>
            <h2>Email: {props.contact.desc.email}</h2>
        </React.Fragment>
    }

    return(
        <div className="contact content">
            {content}
        </div>
    )
}
export default Contact;