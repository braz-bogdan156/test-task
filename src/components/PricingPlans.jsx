import React from 'react';
import '../styles/PricingPlans.scss';
import '../styles/BiggerNumber.scss';
import '../styles/HorizontalLine.scss';
import '../styles/BlackButton.scss';
import {ReactComponent as IconArrow} from '../pictures/arrow.svg';
import {ReactComponent as IconArrowDown} from '../pictures/arrow_down.svg';
import {ReactComponent as IconCheck} from '../pictures/check.svg';
import {ReactComponent as IconStar} from '../pictures/star_icon.svg';

export default function PricingPlans() {
    return (
        <section className='plans__container'>
            <section className='plans__wrapper'>
                <section className='plans__group-elements'>
            <section className='plans__info'>
                <h5 className='section__small-title'>PRICING PLANS</h5>
                <h1 className='section__big-title'>Affordable Pricing Plans</h1>
                <article className='plans__paragraphes'>
                <p className='section__paragraph'>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit </p>
                <p className='section__paragraph'>Omnis Id Atque Dignissimos Repellat Quae Ullam. </p>
                </article>
            </section>
            <button className='section__button--arrow-button plans__group-button'>
            <span className='button--arrow-button__text '>See all plans</span>
            <IconArrow aria-label="arrow" className='button--arrow-button__icon ' />
            </button>
            </section>
            <section className='plans__features'>
                <article className='plans__features-card'>
                    <article className='plans__text-info'>
                        <h5 className='section__small-title plans__heading'>FREE</h5>
                        <h1 className='section__bigger-number plans__big-heading'>$00
                            <span className='section__paragraph'>/Per Project</span></h1>
                    </article>
                    <hr className='section__horizontal-line plans__horizontal-line' />
                    <article className='plans__features-title'>
                        <p className='section__paragraph'>Features</p>
                    </article>
                    <ul className='plans__features-list'>
                        <li className='plans__features-list-item'>
                            <IconCheck aria-label="check" className='plans__features-icon' />
                            <span className='plans__features-text section__paragraph'>150 Lorem, Ipsum Dolor.</span></li>
                        <li className='plans__features-list-item'>
                            <IconCheck aria-label="check" className='plans__features-icon' />
                            <span className='plans__features-text section__paragraph'>20 Lorem Ipsum Dolor Sit </span></li>
                        <li className='plans__features-list-item'>
                            <IconCheck aria-label="check" className='plans__features-icon' />
                            <span className='plans__features-text section__paragraph'>Lorem Ipsum Dolor Sit.</span></li>
                        <li className='plans__features-list-item'>
                            <IconCheck aria-label="check" className='plans__features-icon' />
                            <span className='plans__features-text section__paragraph'>Free Lorem Ipsum Dolor</span></li>
                        <li className='plans__features-list-item'>
                            <IconCheck aria-label="check" className='plans__features-icon' />
                            <span className='plans__features-text section__paragraph'>Added Lorem Ipsum Dolo</span></li>
                    </ul>
                    <button className='section__black-button plans__features-button'><span className='black-button--text'>Select plan</span></button>
                </article>
                <article className='plans__features-card'>
                    <article className='plans__text-info'>
                        <h5 className='section__small-title plans__heading'>STANDARD</h5>
                        <h1 className='section__bigger-number plans__big-heading'>$85
                            <span className='section__paragraph'>/Per Project</span></h1>
                    </article>
                    <hr className='section__horizontal-line plans__horizontal-line' />
                    <article className='plans__features-title'>
                        <p className='section__paragraph '>Features</p>
                    </article>
                    <ul className='plans__features-list'>
                        <li className='plans__features-list-item'>
                            <IconCheck aria-label="check" className='plans__features-icon' />
                            <span className='plans__features-text section__paragraph'>150 Lorem, Ipsum Dolor.</span></li>
                        <li className='plans__features-list-item'>
                            <IconCheck aria-label="check" className='plans__features-icon' />
                            <span className='plans__features-text section__paragraph'>20 Lorem Ipsum Dolor Sit </span></li>
                        <li className='plans__features-list-item'>
                            <IconCheck aria-label="check" className='plans__features-icon' />
                            <span className='plans__features-text section__paragraph'>Lorem Ipsum Dolor Sit.</span></li>
                        <li className='plans__features-list-item'>
                            <IconCheck aria-label="check" className='plans__features-icon' />
                            <span className='plans__features-text section__paragraph'>Free Lorem Ipsum Dolor</span></li>
                        <li className='plans__features-list-item'>
                            <IconCheck aria-label="check" className='plans__features-icon' />
                            <span className='plans__features-text section__paragraph'>Added Lorem Ipsum Dolo</span></li>
                    </ul>
                    <button className='section__black-button plans__features-button'><span className='black-button--text'>Select plan</span></button>
                </article>
                <article className='plans__features-card plans__features--third-card '>
                    <article className='plans__text-info'>
                        <article className='plans__group-info'>
                        <h5 className='section__small-title'>PRO</h5>
                        <button className='button button--best-offer'>
                            <IconStar  aria-label="star" className='button--best-offer-button__icon' /><span className='button--best-offer-button__text '>Best offer</span></button>
                            </article>
                        <h1 className='section__bigger-number plans__big-heading'>$150
                            <span className='section__paragraph'>/Per Project</span></h1>
                    </article>
                    <hr className='section__horizontal-line plans__horizontal-line' />
                    <article className='plans__features-title'>
                        <p className='section__paragraph'>Features</p>
                    </article>
                    <ul className='plans__features-list'>
                        <li className='plans__features-list-item'>
                        <IconCheck aria-label="check" className='plans__features-icon plans__features--another-icon' />
                            <span className='plans__features-text section__paragraph'>150 Lorem, Ipsum Dolor.</span></li>
                        <li className='plans__features-list-item'>
                        <IconCheck aria-label="check" className='plans__features-icon plans__features--another-icon' />
                            <span className='plans__features-text section__paragraph'>20 Lorem Ipsum Dolor Sit </span></li>
                        <li className='plans__features-list-item'>
                        <IconCheck aria-label="check" className='plans__features-icon plans__features--another-icon' />
                            <span className='plans__features-text section__paragraph'>Lorem Ipsum Dolor Sit.</span></li>
                        <li className='plans__features-list-item'>
                        <IconCheck aria-label="check" className='plans__features-icon plans__features--another-icon' />
                            <span className='plans__features-text section__paragraph'>Free Lorem Ipsum Dolor</span></li>
                        <li className='plans__features-list-item'>
                        <IconCheck aria-label="check" className='plans__features-icon plans__features--another-icon' />
                            <span className='plans__features-text section__paragraph'>Added Lorem Ipsum Dolo</span></li>
                    </ul>
                    <button className='section__black-button plans__features-button  '><span className='black-button--text plans__button--another-text'>Select plan</span></button>
                    </article>
                <article className='plans__features-card'>
                    <article className='plans__text-info'>
                        <h5 className='section__small-title plans__heading'>ULTIMATE</h5>
                        <h1 className='section__bigger-number plans__big-heading'>$210
                            <span className='section__paragraph'>/Per Project</span></h1>
                    </article>
                    <hr className='section__horizontal-line plans__horizontal-line' />
                    <article className='plans__features-title'>
                        <p className='section__paragraph'>Features</p>
                    </article>
                    <ul className='plans__features-list'>
                        <li className='plans__features-list-item'>
                            <IconCheck aria-label="check" className='plans__features-icon' />
                            <p className='plans__features-text section__paragraph'>150 Lorem, Ipsum Dolor.</p></li>
                        <li className='plans__features-list-item'>
                            <IconCheck aria-label="check" className='plans__features-icon' />
                            <p className='plans__features-text section__paragraph'>20 Lorem Ipsum Dolor Sit </p></li>
                        <li className='plans__features-list-item'>
                            <IconCheck aria-label="check" className='plans__features-icon' />
                            <p className='plans__features-text section__paragraph'>Lorem Ipsum Dolor Sit.</p></li>
                        <li className='plans__features-list-item'>
                            <IconCheck aria-label="check" className='plans__features-icon' />
                            <p className='plans__features-text section__paragraph'>Free Lorem Ipsum Dolor</p></li>
                        <li className='plans__features-list-item'>
                            <IconCheck aria-label="check" className='plans__features-icon' />
                            <p className='plans__features-text section__paragraph'>Added Lorem Ipsum Dolo</p></li>
                    </ul>
                    <button className='section__black-button plans__features-button'><span className='black-button--text'>Select plan</span></button>
                </article>
            </section>
            </section>
            <button className='section__button--down-button'>
        <IconArrowDown  alt="arow_don" className='button--down-button__icon' />
        </button>
        </section>
       
    )
}
