import React, { useState } from "react";
import "../styles/Footer.scss";
import {ReactComponent as IconOpen} from '../pictures/open.svg';
import {ReactComponent as IconArrow} from '../pictures/arrow.svg';
import {ReactComponent as IconEmail} from '../pictures/email.svg';
import {ReactComponent as IconCall} from '../pictures/call.svg';
import {ReactComponent as IconMap} from '../pictures/mapa.svg';
import {ReactComponent as IconFaceBook} from '../pictures/facebook.svg';
import {ReactComponent as IconYoutube} from '../pictures/youtube.svg';
import {ReactComponent as IconInstagram} from '../pictures/insta.svg';
import {ReactComponent as IconX} from '../pictures/x.svg';


export default function Footer() {
  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  const onEmailChange = e => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  const onEmailSubmit = e => {
    e.preventDefault();
    const trimmedEmail = e.target.email.value.trim();
    if (trimmedEmail === "") {
      setEmailMessage("Please, write your email");
      return;
    }
    validateEmail(trimmedEmail);
  };

  const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailMessage("Invalid email address");
    } else {
      setEmailMessage("You have successfully subscribed to our page!");
    }
  };

  return (
    <footer className="footer__container">
      <section className="footer__wrapper">
        <section className="footer__titles">
          <section className="footer__group-text-info">
            <figure className="logo footer__logo">
              <span className="logo__circle footer__logo-circle"></span>
              <span className="logo__zaokrkvadrat"></span>
              <span className="logo__text footer__another-logo-text">Logo</span>
            </figure>
            <article className="footer__paragraphes">
              <p className="footer__paragraphes-paragraph">
                Lorem ipsum dolor, sit amet consectetur{" "}
              </p>
              <p className="footer__paragraphes-paragraph">
                adipisicing elit. Voluptatibus facere modi
              </p>
              <p className="footer__paragraphes-paragraph">
                possimus dignissimos, aliquam nobis eaque?
              </p>
              <p className="footer__paragraphes-paragraph">
                Voluptatem magnam quisquam rem.
              </p>
            </article>
            <section className="footer__mail-info">
              <article className="footer__advice">
                <p className="footer__advice-paragraph">
                  Subscribe To Our News Letter
                </p>
              </article>
              <form
                className="footer__form-mail-container"
                onSubmit={onEmailSubmit}
              >
                <input
                  className="footer__form-input"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={onEmailChange}
                  autoComplete="off"
                />

                <button
                  className="section__button--arrow-button footer__button--another-button"
                  type="submit"
                >
                  <span className="button--arrow-button__text button--another-button__text ">
                    Subscribe
                  </span>
                  <IconArrow
                    aria-label="arrow"
                    className="button--arrow-button__icon button--another-button__icon "
                  />
                </button>
              </form>
              <article className="footer__personal-info">
                <p className="footer__personal-info-paragraph">
                  *We Will Not Share Your Personal Info
                </p>
                {emailMessage && (
                  <p className="footer__personal-info-paragraph">
                    {emailMessage}
                  </p>
                )}
              </article>
            </section>
          </section>
          <article className="footer__group-text">
            <h1 className="footer__title"> Useful Links</h1>
            <ul className="footer__list">
              <li className="footer__list-item">
                <IconOpen
                  aria-label="open"
                  className="footer__list-item-icon"
                />
                <span className="footer__list-item-text">Google</span>
              </li>
              <li className="footer__list-item">
                 <IconOpen
                  aria-label="open"
                  className="footer__list-item-icon"
                />
                <span className="footer__list-item-text">Dribbble</span>
              </li>
              <li className="footer__list-item">
                 <IconOpen
                  aria-label="open"
                  className="footer__list-item-icon"
                />
                <span className="footer__list-item-text">Linkedin</span>
              </li>
              <li className="footer__list-item">
                 <IconOpen
                  aria-label="open"
                  className="footer__list-item-icon"
                />
                <span className="footer__list-item-text">Wikipedia</span>
              </li>
            </ul>
          </article>
          <article className="footer__group-text">
            <h1 className="footer__title"> Resources</h1>
            <ul className="footer__list">
              <li className="footer__list-item">
                 <IconOpen
                  aria-label="open"
                  className="footer__list-item-icon"
                />
                <span className="footer__list-item-text">Google</span>
              </li>
              <li className="footer__list-item">
                 <IconOpen
                  aria-label="open"
                  className="footer__list-item-icon"
                />
                <span className="footer__list-item-text">Dribbble</span>
              </li>
              <li className="footer__list-item">
                 <IconOpen
                  aria-label="open"
                  className="footer__list-item-icon"
                />
                <span className="footer__list-item-text">Linkedin</span>
              </li>
              <li className="footer__list-item">
                 <IconOpen
                  aria-label="open"
                  className="footer__list-item-icon"
                />
                <span className="footer__list-item-text">Wikipedia</span>
              </li>
            </ul>
          </article>
          <article className="footer__group-text">
            <h1 className="footer__title "> Contact Info</h1>
            <ul className="footer__list">
              <li className="footer__list-item">
                <IconEmail
                 
                  aria-label="email"
                  className="footer__list-item-icon"
                />
                <span className="footer__list-item-text">
                  example@support.com
                </span>
              </li>
              <li className="footer__list-item">
                <IconMap
                
                  aria-label="mapa"
                  className="footer__list-item-icon"
                />
                <span className="footer__list-item-text">
                  5 xyz st., adc, vallhalla
                </span>
              </li>
              <li className="footer__list-item">
                <IconCall
                
                  aria-label="call"
                  className="footer__list-item-icon"
                />
                <span className="footer__list-item-text">+20123456789</span>
              </li>
              <li className="footer__list-item ">
                <ul className="buttons__container footer__buttons">
                  <li className="buttons__item">
                    <button className="icon-button footer__item-button">
                      <IconFaceBook
                        
                        aria-label="face"
                        className="icon-button__image footer__item-icon"
                      />
                    </button>
                  </li>
                  <li className="buttons__item">
                    <button className="icon-button footer__item-button">
                      <IconYoutube
                        
                        aria-label="yout"
                        className="icon-button__image footer__item-icon"
                      />
                    </button>
                  </li>
                  <li className="buttons__item">
                    <button className="icon-button footer__item-button">
                      <IconInstagram
                       
                        aria-label="inst"
                        className="icon-button__image  footer__item-icon"
                      />
                    </button>
                  </li>
                  <li className="buttons__item">
                    <button className="icon-button footer__item-button">
                      <IconX
                      
                        aria-label="x"
                        className="icon-button__image  footer__item-icon"
                      />
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </article>
        </section>
        <section className="footer__down-content">
          <article className="footer__info-creator">
            <p className="footer__info-creator-paragraph">
              © 2024 Created by: Martin
            </p>
          </article>
          <article className="footer__privacy">
            <p className="footer__info-creator-paragraph">Terms of Use</p>
            <p className="footer__info-creator-paragraph">Privacy Policy</p>
          </article>
        </section>
      </section>
    </footer>
  );
}
