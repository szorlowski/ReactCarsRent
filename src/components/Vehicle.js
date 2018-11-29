import React from 'react';
import '../styles/campers.css'
import '../styles/content.css'


const Vehicle = props => {
  let textButton = "RENT ME";
  let vehicleClasses = 'camper active';
  let buttonClasses = 'rent-button';
  let link = "/rent?vehicleId=" + props.id;

  if(props.rented){
    textButton = "RENT ME FOR FUTURE!";
    vehicleClasses = 'camper';
    buttonClasses = 'rent-button disabled';
  }

  return (
    <div className={vehicleClasses}>
      <div className="camper-header">
        {props.name}<br/>
        {props.stars}
        <span className="fa fa-star checked"/><br/>
        <a href={link} className={buttonClasses}>{textButton}</a>
      </div>
      <div className="camper-details">
        <img src={props.photo} alt="photo" width='100%' height='100%'/>
        <div className="centered">RENT ME</div>
      </div>
      <div className="camper-footer">
        CENA ZA GODZINE: {props.price}
      </div>
    </div>
  )
}

export default Vehicle;