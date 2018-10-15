import React from 'react';
import HeaderItem from "./HeaderItem";
import "../styles/header.css"

const Header = (props) => {
  return(
    <div className={"header"}>
      {props.items.map(item => {
        return <HeaderItem name={item} key={Math.random()}/>
      })}
    </div>
  )
};

export default Header;