import React from 'react';
import '../styles/headerItem.css'


const HeaderItem = (props) =>{
  return(
    <div className={"headerItem"}>
      {props.name}
    </div>
  )
};

export default HeaderItem;