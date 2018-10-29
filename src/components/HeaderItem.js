import React from 'react';
import '../styles/headerItem.css'


const HeaderItem = (props) =>{
  return(
    <a href={props.link} className="headerItem">
      {props.name}
    </a>
  )
};

export default HeaderItem;