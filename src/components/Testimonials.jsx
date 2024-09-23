import React from 'react';
import '../styles/Testimonials.scss';
import {ReactComponent as IconArrowDown} from '../pictures/arrow_down.svg';
import {ReactComponent as IconAvatar} from '../pictures/avatar.svg';



export default function Testimonials() {
  return (
    <section className='testimonials__container'>
        <article className='testimonials__info'>
            <h5 className='section__small-title'>TESTIMONIALS</h5>
            <h1 className='section__big-title'>Customers Testmonials</h1>
        </article>
        <article className='testimonials__form-container'>
          <article className='testimonials__form-wrapper'>
            <ul className='testimonials__users-list'>
            <li className='testimonials__list-item'>
                  <article className='testimonials__images-info'>
                  <img src="/img/quotes.png" alt="quot" className='testimonials__list-item-icon'/>
                 
                  <figure className='testimonials__avtor-info'>
                  <IconAvatar aria-label="avatar" className='testimonials__avtor-info-icon'/>
                  <figcaption>
              <span className="figcaption__name testimonials__paragraph-another-text">Fairouz Mhmd</span><br/>
              <span className="figcaption__title testimonials__title-another-text">Manager</span>
                  </figcaption>
                  </figure>
                  </article>
                  <article className='testimonials__paragraphes'>
                  <p className='section__paragraph testimonials__paragraph-another-text'>ipsum dolor sit amet consectetur</p>
                  <p className='section__paragraph testimonials__paragraph-another-text'>adipisicing elit. Quod, id sequi aut </p>
                  <p className='section__paragraph testimonials__paragraph-another-text'>qui est ab, corporis quis maiores </p>
                  <p className='section__paragraph testimonials__paragraph-another-text'>reiciendis explicabo odio tenetur </p>
                  <p className='section__paragraph testimonials__paragraph-another-text'>nulla sint vel.</p>
                  </article>
                </li>
                <li className='testimonials__list-item'>
                  <article className='testimonials__images-info'>
                  <img src="/img/quotes.png" alt="quot" className='testimonials__list-item-icon'/>
                 
                  <figure className='testimonials__avtor-info'>
                  <IconAvatar aria-label="avatar" className='testimonials__avtor-info-icon'/>
                  <figcaption>
              <span className="figcaption__name testimonials__paragraph-another-text">Fairouz Mhmd</span><br/>
              <span className="figcaption__title testimonials__title-another-text">Manager</span>
                  </figcaption>
                  </figure>
                  </article>
                  <article className='testimonials__paragraphes'>
                  <p className='section__paragraph testimonials__paragraph-another-text'>ipsum dolor sit amet consectetur</p>
                  <p className='section__paragraph testimonials__paragraph-another-text'>adipisicing elit. Quod, id sequi aut </p>
                  <p className='section__paragraph testimonials__paragraph-another-text'>qui est ab, corporis quis maiores </p>
                  <p className='section__paragraph testimonials__paragraph-another-text'>reiciendis explicabo odio tenetur </p>
                  <p className='section__paragraph testimonials__paragraph-another-text'>nulla sint vel.</p>
                  </article>
                </li>
                <li className='testimonials__list-item'>
                  <article className='testimonials__images-info'>
                <img src="/img/quotes.png" alt="quot" className='testimonials__list-item-icon'/>
                 
                  <figure className='testimonials__avtor-info'>
                  <IconAvatar aria-label="avatar" className='testimonials__avtor-info-icon'/>
                  <figcaption>
              <span className="figcaption__name testimonials__paragraph-another-text">Fairouz Mhmd</span><br/>
              <span className="figcaption__title testimonials__title-another-text">Manager</span>
                  </figcaption>
                  </figure>
                  </article>
                  <article className='testimonials__paragraphes'>
                  <p className='section__paragraph testimonials__paragraph-another-text'>ipsum dolor sit amet consectetur</p>
                  <p className='section__paragraph testimonials__paragraph-another-text'>adipisicing elit. Quod, id sequi aut </p>
                  <p className='section__paragraph testimonials__paragraph-another-text'>qui est ab, corporis quis maiores </p>
                  <p className='section__paragraph testimonials__paragraph-another-text'>reiciendis explicabo odio tenetur </p>
                  <p className='section__paragraph testimonials__paragraph-another-text'>nulla sint vel.</p>
                  </article>
                </li>
                
            </ul>
            </article>
        </article>
        <button className='section__button--down-button testimonials__another-button'>
        <IconArrowDown src="/img/arrow_down.png" alt="arow_don" className='button--down-button__icon' />
        </button>  
    </section>
  )
}
