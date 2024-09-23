import React from "react";
import "../styles/WhyChooseUs.scss";
import "../styles/BigNumber.scss";
import {ReactComponent as ImageBusiness} from '../pictures/business_deal-2.svg';
import {ReactComponent as IconArrow} from '../pictures/arrow.svg';
import {ReactComponent as IconArrowDown} from '../pictures/arrow_down.svg';

export default function WhyChooseUS() {
  return (
    <section className="choose__container">
      <section className="choose__left-side">
        <article className="choose__left-side-container">
          <ImageBusiness aria-label="busin" className="container__img" />
          <h5 className="section__small-title">WHY CHOOSE US</h5>
          <section className="container__big-titles">
            <h1 className="section__big-title">Why Our Customers</h1>
            <h1 className="section__big-title">
              Choose <span className="section__underline-title">Working</span>
              <span className="section__big-title section__big-title--highlight ">
                With Us
              </span>
            </h1>
          </section>
          <section className="section__paragraphees">
            <p className="section__paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A{" "}
            </p>
            <p className="section__paragraph">
              officia molestiae dolorum tempora ut accusamus cupiditate!{" "}
            </p>
            <p className="section__paragraph">
              Nesciunt tempora reiciendis libero voluptate!
            </p>
          </section>
          <button className="section__button--arrow-button">
            <span className="button--arrow-button__text">Get in touch</span>
            <IconArrow
              aria-label="arrow"
              className="button--arrow-button__icon "
            />
          </button>
        </article>
      </section>
      <section className="choose__right-side">
        <article className="choose__right-side-container">
          <article className="section__article-first">
            <section className=" choose__section-group-text--1">
              <h1 className="section__big-number">01.</h1>
              <p className="section__article-title">Latest Technologies</p>
            </section>
            <section className="section__paragraphes">
              <p className="section__paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing{" "}
              </p>
              <p className="section__paragraph">
                elit. Neque repellendus minima reiciendis nobis{" "}
              </p>
              <p className="section__paragraph">dolore obcaecati. </p>
            </section>
          </article>
          <article className="section__article-second">
            <section className=" choose__section-group-text--2">
              <h1 className="section__big-number">02.</h1>
              <p className="section__article-title">Uniqe Solutions</p>
            </section>
            <section className="section__paragraphes">
              <p className="section__paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing{" "}
              </p>
              <p className="section__paragraph">
                elit. Neque repellendus minima reiciendis nobis{" "}
              </p>
              <p className="section__paragraph">dolore obcaecati. </p>
            </section>
          </article>
          <article className="section__article-third">
            <section className=" choose__section-group-text--3">
              <h1 className="section__big-number">03.</h1>
              <p className="section__article-title">Powerful Strategies</p>
            </section>
            <section className="section__paragraphes">
              <p className="section__paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing{" "}
              </p>
              <p className="section__paragraph">
                elit. Neque repellendus minima reiciendis nobis{" "}
              </p>
              <p className="section__paragraph">dolore obcaecati. </p>
            </section>
          </article>
        </article>
      </section>

      <button className="section__button--down-button">
        <IconArrowDown
          aria-label="arow_down"
          className="button--down-button__icon"
        />
      </button>
    </section>
  );
}
