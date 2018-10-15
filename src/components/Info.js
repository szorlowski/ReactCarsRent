import React from 'react';

const Info = props => {
    const isActive = props.info.active;
    let content;

    if(isActive){
        content = 
        <React.Fragment>
            <h1>INFO</h1>
            <h2>Opis: {props.info.desc}</h2>
        </React.Fragment>
    }

    return(
        <div className="info content" onClick={props.clicked}>
           {content}
        </div>
    )
}

export default Info;