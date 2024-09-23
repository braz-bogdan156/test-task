import './NavMobile.scss';
import { ReactComponent as IconCheckBox } from '../../../pictures/circles.svg';
import { linkItems } from '../linkItems';

export default function NavMobile({open, close}) {
  return (
    <div className={[open ? 'wrapper _open':'wrapper']} onClick={close}>
      <nav className="nav__mobile">
        <figure className="logo">
          <span className="logo__circle"></span>
          <span className="logo__zaokrkvadrat"></span>
          <span className="logo__text">Logo</span>
        </figure>

        <ul className="nav__list">
          { linkItems.map((link)=>{
            return (
              <li className={[link.name === 'home' ? 
                'nav__item home':
                'nav__item']} 
                key={link.name}>
                <a href={link.href}>
                  {link.name}
                  {link.name === 'home' && <IconCheckBox className="header__list-icon" aria-label="circle"/>}
                </a>
              </li>
            )})
          }
        </ul>
      </nav>
    </div>
  )
}