import React from 'react'
import '../styles/camper.css'


const Camper = props => {
    return(
      <div className={"camper"}>
        <img src={props.camper.photo} height='80%' width='100%' alt={props.camper.title} />
      </div>
    )
};

export default Camper;