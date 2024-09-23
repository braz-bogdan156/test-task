import React, { useState } from "react";
import "./Header.scss";
import "../../styles/LogoType.scss";
import { ReactComponent as IconMenu } from '../../pictures/Menu.svg';
import Nav from "./Nav/Nav";
import NavMobile from "./NavMobile/NavMobile";

export default function Header() {
  const[ openMenu, setOpenMenu ]= useState(true)

  const hendleClose = ()=>{
    setOpenMenu(false)
  }
  const hendleOpen = ()=>{
    setOpenMenu(true)
  }

  return (
    <div className="container">
      <header className="header">
        <figure className="logo">
          <span className="logo__circle"></span>
          <span className="logo__zaokrkvadrat"></span>
          <span className="logo__text">Logo</span>
        </figure>
        <Nav/>
        <NavMobile open={openMenu} close={hendleClose}/>
        <button type="button" className="menu_btn" onClick={hendleOpen}>
          <span className="header__group-info">
            Menu
            <IconMenu className="header__list-icon" aria-label="circle"/>
          </span>
        </button>
      </header>   
    </div>
  );
}
