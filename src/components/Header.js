import React from 'react';
import HeaderItem from "./HeaderItem";
import "../styles/header.css"

const Header = (props) => {
  return(
    <div className={"header"}>
      {props.items.map((item, index) => {
        return <HeaderItem name={item} key={Math.random()} clicked={() => props.clicked(index)}/>
      })}
    </div>
  )
};

export default Header;