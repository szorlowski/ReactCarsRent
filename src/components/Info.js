import React from 'react';
import '../styles/content.css'


const Info = props => {
    return(
        <div className="info content">
          <React.Fragment>
            <h1>INFO</h1>
            <h2>Opis: {props.info.desc}</h2>
          </React.Fragment>
        </div>
    )
};

export default Info;