import React from 'react';
import '../styles/campers.css'

const Camper = props => {
    return(
        <div className="camper">
            <div className="camper-header">
                {props.name}<br/>
                {props.stars}
                <span class="fa fa-star checked"></span>
            </div>
            <div className="camper-details">
                <img src={props.photo} alt="photo" width='100%' height='100%' />
            </div>
            <div className="camper-footer">
                CENA ZA GODZINE: {props.price}
            </div>
        </div>
    )
}

export default Camper;