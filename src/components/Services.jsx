import React from "react";
import "../styles/Services.scss";
import "../styles/BoldParagraph.scss";
import {ReactComponent as ImageVideo} from '../pictures/video_conference.svg';
import {ReactComponent as IconArrow} from '../pictures/arrow.svg';
import {ReactComponent as IconArrowDown} from '../pictures/arrow_down.svg';

export default function Services() {
  return (
    <section className="services__container">
      <section className="services__wrapper">
        <article className="services__article services__article--1">
          <article className="services__wrapper-image">
            <ImageVideo
              aria-label="video"
              className="services__image"
            />
          </article>
          <article className="services__info">
            <h5 className="section__small-title">SERVICES</h5>
            <h1 className="section__big-title">Services We Offer</h1>
            <article className="section__paragraphees">
              <p className="section__paragraph">
                Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit{" "}
              </p>
              <p className="section__paragraph">
                Omnis Id Atque Dignissimos Repellat Quae Ullam.
              </p>
            </article>
            <button className="section__button--arrow-button">
              <span className="button--arrow-button__text">
                See all services
              </span>
              <IconArrow
                aria-label="arrow"
                className="button--arrow-button__icon "
              />
            </button>
          </article>
        </article>
        <section className="services__section-group-articles">
          <article className="services__article services__article--2">
            <article className="services__black-container"></article>
            <article className="services__white-container">
              <h1 className="section__article-title">Web Development</h1>
              <article className="services__paragraphes">
                <p className="section__paragraph">
                  Lorem ipsum dolor sit amet consectetur{" "}
                </p>
                <p className="section__paragraph">
                  adipisicing elit. Neque repellendus minima{" "}
                </p>
                <p className="section__paragraph">
                  reiciendis nobis dolore obcaecati.
                </p>
              </article>
              <button className="button button--read-more">
            
                <span className="button--read-more__text">Read more</span>{" "}
                <IconArrow
                  aria-label="more"
                  className="button--read-more__image"
                />
              </button>
            </article>
          </article>
          <article className="services__article services__article--3">
            <ul className="services__list">
              <ul className="services__list--1">
                <li className="services__list-item">
                  <button className="services__button active">
                    <p className="section__bold-paragraph">Web Development</p>
                  </button>
                </li>
                <li className="services__list-item">
                  <button className="services__button">
                    <p className="section__bold-paragraph">Digital Marketing</p>
                  </button>
                </li>
                <li className="services__list-item">
                  <button className="services__button">
                    <p className="section__bold-paragraph">SaaS Products</p>
                  </button>
                </li>
              </ul>
              <ul className="services__list--2">
                <li className="services__list-item">
                  <button className="services__button">
                    <p className="section__bold-paragraph">Apps Development</p>
                  </button>
                </li>
                <li className="services__list-item">
                  <button className="services__button">
                    <p className="section__bold-paragraph">SEO Services</p>
                  </button>
                </li>
                <li className="services__list-item">
                  <button className="services__button">
                    <p className="section__bold-paragraph">Data Analysis</p>
                  </button>
                </li>
              </ul>
            </ul>
          </article>
        </section>
      </section>
      <button className="section__button--down-button section__button--adaptive-down-button">
        <IconArrowDown
          aria-label="arow_don"
          className="button--down-button__icon"
        />
      </button>
    </section>
  );
}
