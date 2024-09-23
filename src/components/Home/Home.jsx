import React from "react";
import "./Home.scss";
import "../../styles/DownButton.scss";
import {ReactComponent as IconArrowDown} from '../../pictures/arrow_down.svg';
import MainContainer from "components/MainContainer/MainContainer";

export default function Home() {
  return (
    <div className="Home">
      <MainContainer />
      <a className="section__button--down-button home__button" href="#about">
        <IconArrowDown
          aria-label="arow_don"
          className="button--down-button__icon"
        />
      </a>
    </div>
  );
}
