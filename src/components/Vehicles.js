import React from 'react';
import Vehicle from './Vehicle'
import '../styles/campers.css'

const Vehicles = props => {
    let content;
    if(props.vehicles.active){
        content =
          <React.Fragment>
            <div className="campers">
            {props.vehicles.content.map(vehicle => {
                return <Vehicle
                key={Math.random()} 
                price={vehicle.price}
                stars={vehicle.stars}
                name={vehicle.name}
                photo={vehicle.photo}
                rented={vehicle.rented}/>
            })}
            </div>
        </React.Fragment>
    }

    return(
        <div className="info content" onClick={props.clicked}>
           {content}
        </div>
    )
};
export default Vehicles;