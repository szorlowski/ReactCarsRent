import React from 'react';
import '../styles/headerItem.css'


const HeaderItem = (props) =>{
  return(
    <div className={"headerItem"} onClick={props.clicked}>
      {props.name.name}
    </div>
  )
};

export default HeaderItem;