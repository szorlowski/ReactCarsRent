import React from 'react';
import '../styles/content.css'

const Contact = props => {
    return(
        <div className="contact content">
          <React.Fragment>
            <h1>Contact</h1>
            <h2>Phone: {props.contact.desc.phone}</h2>
            <h2>Email: {props.contact.desc.email}</h2>
          </React.Fragment>
        </div>
    )
}
export default Contact;