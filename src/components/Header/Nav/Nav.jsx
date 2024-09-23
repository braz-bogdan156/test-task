import './Nav.scss';
import { ReactComponent as IconCheckBox } from '../../../pictures/circles.svg';
import { linkItems } from '../linkItems';

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        { linkItems.map((link)=>{
          return (
            <li className={[link.name === 'home' ? 'nav__item home':'nav__item']} key={link.name}>
              <a href={link.href}>
                {link.name}
                {link.name === 'home' && <IconCheckBox className="header__list-icon" aria-label="circle"/>}
              </a>
            </li>
          )})
        }
      </ul>
    </nav>
  )
}