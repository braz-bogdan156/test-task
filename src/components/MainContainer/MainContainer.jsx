import React from 'react';
import './MainContainer.scss';
import '../../styles/ArrowButton.scss';
import '../../styles/SocialButtons.scss';
import {ReactComponent as ImageSuccess} from '../../pictures/success.svg';
import {ReactComponent as ImageShopping} from '../../pictures/shopping.svg';
import {ReactComponent as ImageShoppingAdd} from '../../pictures/shopping_add.svg';
import {ReactComponent as IconFaceBook} from '../../pictures/facebook.svg';
import {ReactComponent as IconYoutube} from '../../pictures/youtube.svg';
import {ReactComponent as IconInstagram} from '../../pictures/insta.svg';
import {ReactComponent as IconX} from '../../pictures/x.svg';
import {ReactComponent as IconArrow} from '../../pictures/arrow.svg';
import {ReactComponent as ImageEmployee} from '../../pictures/employee.svg';
import {ReactComponent as ImageDesigner} from '../../pictures/designer.svg';
import {ReactComponent as ImageBusiness} from '../../pictures/business_deal-1.svg';
import {ReactComponent as ImageBusinessDeal} from '../../pictures/business_deal-2.svg';
import {ReactComponent as ImageSuccessful} from '../../pictures/successful.svg';
import {ReactComponent as ImageDevelop} from '../../pictures/development.svg';
import {ReactComponent as ImageConference} from '../../pictures/conference.svg';
import {ReactComponent as ImagePerformance} from '../../pictures/performance.svg';
import {ReactComponent as ImageBasket} from '../../pictures/basket.svg';


export default function MainContainer() {
  return (
    <div className='main__container'>
      <div className='main__images'>
        <ul className='images__container'>
          <li className='images__item'><ImageSuccess aria-label='suces' className='images__img'/></li>
          <li className='images__item'><ImageShopping aria-label='shop' className='images__img'/></li>
          <li className='images__item'><ImageShoppingAdd aria-label='shop_ad' className='images__img'/></li>
        </ul>
      </div>

      <div className='main__solutions'>
        <ul className='buttons__container'>
          <li className='buttons__item'><button className='icon-button'><IconFaceBook aria-label='face' className='icon-button__image'/> </button></li>
          <li className='buttons__item'><button className='icon-button'><IconYoutube aria-label='yout' className='icon-button__image'/></button></li>
          <li className='buttons__item'><button className='icon-button'><IconInstagram aria-label='insta' className='icon-button__image'/></button></li>
          <li className='buttons__item'><button className='icon-button'><IconX aria-label='x' className='icon-button__image'/></button></li>
        </ul>
        <section className="it-solutions">
          <h5 className='section__small-title'>IT SOLUTIONS</h5>
          <section className="high-titles">
          <h1 className='section__big-title'>Providing The Best </h1>
          <h1 className='section__big-title'>Services & IT <span className='section__underline-title'>Solutions</span></h1>
          </section>
          <section className='section__paragraphees'>
            <p className='section__paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed </p>
            <p className='section__paragraph'>architecto dolorum inventore totam adipisci</p>
          </section>
            <button className='section__button--arrow-button'>
            <span className='button--arrow-button__text'>Start now</span>
            <IconArrow className='button--arrow-button__icon' aria-label='arrow__icon'/>
            </button>
        </section>
      </div>

      <div className='main__social-media'>
        <ul className='main__social-media__list'>
          <li className='main__social-media__item--1'><ImageEmployee aria-label='employ' className='main__social-media__item__image'/></li>
          <li className='main__social-media__item--2'><ImageDesigner aria-label='designer' className='main__social-media__item__image'/><span className='main__social-media__item__text'>Digital Marketing</span></li>
          <li className='main__social-media__item--3'><ImageEmployee aria-label='employ' className='main__social-media__item__image'/></li>
          <li className='main__social-media__item--4'><ImageSuccess aria-label='suces' className='main__social-media__item__image'/></li>
        </ul>
        
        <ul className='main__social-media__list'>
          <li className='main__social-media__item--5'><ImageShopping aria-label='shop' className='main__social-media__item__image'/></li>
          <li className='main__social-media__item--6'><ImageBusiness  aria-label="business" className='main__social-media__item__image'/></li>
          <li className='main__social-media__item--7'><ImageBusinessDeal aria-label="busin" className='main__social-media__item__image'/> <span className='main__social-media__item__text'>SEO Services</span></li>
          <li className='main__social-media__item--8'><ImageSuccessful aria-label="succes" className='main__social-media__item__image'/></li>
        </ul>

        <ul className='main__social-media__list'>
          <li className='main__social-media__item--9'><ImageDevelop aria-label="develop" className='main__social-media__item__image'/><span className='main__social-media__item__text'>Apps Development</span></li>
          <li className='main__social-media__item--10'><ImageConference aria-label="confer" className='main__social-media__item__image'/></li>
          <li className='main__social-media__item--11'><ImagePerformance aria-label="perform" className='main__social-media__item__image'/></li>
          <li className='main__social-media__item--12'><ImageBasket aria-label="basket" className='main__social-media__item__image'/></li>
        </ul>
      </div>
    </div>
    
  )
}
