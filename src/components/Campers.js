import React from 'react';
import Camper from './Camper'
import '../styles/campers.css'

const Campers = props => {
    const isActive = props.campers.active;
    let content;

    if(isActive){
        content = 
        <React.Fragment>
            <h1>{props.campers.name}</h1>
            <div className="campers">
            {props.campers.content.map(camper => {
                return <Camper 
                key={Math.random()} 
                price={camper.price} 
                stars={camper.stars} 
                name={camper.name}
                photo={camper.photo} />
            })}
            </div>
        </React.Fragment>
    }

    return(
        <div className="info content" onClick={props.clicked}>
           {content}
        </div>
    )
}
export default Campers;