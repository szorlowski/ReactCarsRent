import React from 'react';
import HeaderItem from "./HeaderItem";
import "../styles/header.css"

const Header = (props) => {
  return(
    <div className={"header"}>
      {props.items.map((item) => {
        return <HeaderItem name={item.name} key={Math.random()} link={item.link}/>
      })}
    </div>
  )
};

export default Header;