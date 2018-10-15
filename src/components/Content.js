import React from 'react';
import '../styles/content.css'
import Camper from "./Camper";


const Content = props => {
  return (
    <div className={"content"}>
      {props.content.campers.map(camper => {
        return <Camper camper={camper} key={Math.random()}/>
      })}
    </div>
  )
};

export default Content;
