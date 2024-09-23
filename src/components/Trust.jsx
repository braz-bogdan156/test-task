import React from "react";
import "../styles/Trust.scss";
import {ReactComponent as IconArrowDown} from '../pictures/arrow_down.svg';

export default function Trust() {
  return (
    <section className="trust__container">
      <article className="trust__info">
        <h1 className="section__big-title">
          Trusted By Over <span className="section__underline-title">500</span>{" "}
          Clients Around The World
        </h1>
      </article>
      <article className="trust__cards">
        <ul className="trust__cards-list">
          <li className="trust__list-item">
            <span className="list-item__text">Logo</span>
          </li>
          <li className="trust__list-item">
            <span className="list-item__text">Logo</span>
          </li>
          <li className="trust__list-item">
            <span className="list-item__text">Logo</span>
          </li>
          <li className="trust__list-item">
            <span className="list-item__text">Logo</span>
          </li>
          <li className="trust__list-item">
            <span className="list-item__text">Logo</span>
          </li>
        </ul>
      </article>
      <button className="section__button--down-button trust__another-button">
        <IconArrowDown
         aria-label="arow_don"
          className="button--down-button__icon"
        />
      </button>
    </section>
  );
}
