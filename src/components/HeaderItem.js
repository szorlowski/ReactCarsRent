import React from 'react';
import '../styles/headerItem.css'


const HeaderItem = (props) =>{
  return(
    <div className={"headerItem"} onClick={() => props.click(props.name)}>
      {props.name}
    </div>
  )
};

export default HeaderItem;