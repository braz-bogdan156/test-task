import React from 'react';

import '../styles/InfoBlock.scss';
import '../styles/Paragraph.scss';
import '../styles/BigTitle.scss';
import '../styles/UnderlineTitle.scss';
import '../styles/ArticleTitle.scss';
import '../styles/SmallTitle.scss';
import {ReactComponent as IconArrow} from '../pictures/arrow.svg';
import {ReactComponent as IconArrowDown} from '../pictures/arrow_down.svg';
import {ReactComponent as IconStar} from '../pictures/star.svg';
import {ReactComponent as IconMap} from '../pictures/map.svg';
import {ReactComponent as IconQuestion} from '../pictures/question.svg';
import {ReactComponent as IconReach} from '../pictures/agree.svg';



export default function InfoBlock() {
  return (
    
    <div className='form-container'>
      <span className='stop_far' id='about'></span>
      <section className='content-wrapper'>
      <article className='form-section about-us'>
        <section className='section__titles'>
        <h5 className='section__small-title'>ABOUT US</h5>
        <h1 className='section__big-title'>Trusted By Worldwide</h1>
        <h1 className='section__big-title'>Clients Since <span className='section__underline-title'>1980</span></h1>
        </section>
        <section className='section__paragraphees'>
          <p className='section__paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A </p>
          <p className='section__paragraph'>officia molestiae dolorum tempora ut accusamus cupiditate! </p>
          <p className='section__paragraph'>Nesciunt tempora reiciendis libero voluptate!</p>
          </section>
          <button className='section__button--arrow-button'>
            <span className='button--arrow-button__text'>Get in touch</span><IconArrow  alt="arrow" className='button--arrow-button__icon ' /></button>
      </article>
      <section className='form-sections--1'>
      <article className='form-sections__article first-on-field'>
        <article className='form-sections__article-group-info'>
      <IconStar  aria-label="star" className='easy-to-reach__icon'/>
      
        <h1 className='section__article-title'>First On Field</h1>
        </article>
        <section className='section__paragraphes'>
          <p className='section__paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A </p>
          <p className='section__paragraph'>officia molestiae dolorum tempora ut accusamus cupiditate! </p>
          <p className='section__paragraph'>Nesciunt tempora reiciendis libero voluptate!</p>
          </section>
      </article>
      <article className='form-sections__article easy-to-reach'>
      <article className='form-sections__article-group-info'>
        <IconReach aria-label="reach" className='easy-to-reach__icon'/>
        <h1 className='section__article-title'>Easy To Reach</h1>
        </article>
        <section className='section__paragraphes'>
          <p className='section__paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A </p>
          <p className='section__paragraph'>officia molestiae dolorum tempora ut accusamus cupiditate! </p>
          <p className='section__paragraph'>Nesciunt tempora reiciendis libero voluptate!</p>
          </section>
      </article>
      </section>
      <section className='form-sections--2'>
      <article className='form-sections__article worldwide-service'>
      <article className='form-sections__article-group-info'>
      <IconMap  alt="map" className='easy-to-reach__icon'/>
      <h1 className='section__article-title'>Worldwide <br /> services</h1>
      </article>
        <section className='section__paragraphes'>
          <p className='section__paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A </p>
          <p className='section__paragraph'>officia molestiae dolorum tempora ut accusamus cupiditate! </p>
          <p className='section__paragraph'>Nesciunt tempora reiciendis libero voluptate!</p>
          </section>
      </article>
      <article className='form-sections__article 24/7-support'>
      <article className='form-sections__article-group-info'>
      <IconQuestion  alt="question" className='easy-to-reach__icon'/>
      <h1 className='section__article-title'>24/7 Support</h1>
      </article>
        <section className='section__paragraphes'>
          <p className='section__paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A </p>
          <p className='section__paragraph'>officia molestiae dolorum tempora ut accusamus cupiditate! </p>
          <p className='section__paragraph'>Nesciunt tempora reiciendis libero voluptate!</p>
          </section>
      </article>
      </section>
     
      </section>
      <button className='section__button--down-button'>
      
        <IconArrowDown
         aria-label="arow_don"
          className="button--down-button__icon"
        />
      </button>
        
    </div >
    
    
    
  )
}
