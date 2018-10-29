import React from 'react';
import '../styles/campers.css'

const Vehicle = props => {
  let textButton = "RENT ME";
  let vehicleClasses = 'camper active';
  let buttonClasses = 'rent-button';

  if(props.rented){
    textButton = "NOT AVAILABLE";
    vehicleClasses = 'camper';
    buttonClasses = 'rent-button disabled';
  }

  return (
    <div className={vehicleClasses}>
      <div className="camper-header">
        {props.name}<br/>
        {props.stars}
        <span className="fa fa-star checked"/><br/>

        <button type="button" className={buttonClasses}>{textButton}</button>
      </div>
      <div className="camper-details">
        <img src={props.photo} alt="photo" width='100%' height='100%'/>
      </div>
      <div className="camper-footer">
        CENA ZA GODZINE: {props.price}
      </div>
    </div>
  )
}

export default Vehicle;