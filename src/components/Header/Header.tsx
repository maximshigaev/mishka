import {
  FC,
  useState,
  useCallback,
} from 'react';
import {
  Link,
  useLocation,
} from 'react-router-dom';
import cn from 'classnames';

// Styles
import './header.scss';

// Constants
import { Routes } from '../../constants';

// Images
import logoMobile from '../../images/logo-mobile.png';
import logoTablet from '../../images/logo-tablet.png';
import logoDesktop from '../../images/logo-desktop.png';

export const Header: FC = () => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const { pathname: path } = useLocation();  

  const handleToggleBtnClick = useCallback(() => setIsMobileMenuOpened(!isMobileMenuOpened), [isMobileMenuOpened]);

  const toggleBtnClass = cn('header__toggle-btn', {
    'header__toggle-btn--closed': !isMobileMenuOpened,
    'header__toggle-btn--opened': isMobileMenuOpened,
  });

  const menuWrapperClass = cn('header__menu-wrapper', {
    'header__menu-wrapper--closed': !isMobileMenuOpened,
  });

  const navListClass = cn('header__nav-list', {
    'header__nav-list--closed': !isMobileMenuOpened,
  });

  return (
    <div className="content-wrapper">
      <header className="header">
        <nav className="header__navigation">
          <Link
            className="header__logo-link"
            to={(path !== Routes.MAIN_PAGE) ? Routes.MAIN_PAGE : ''}
          >
            <picture>
              <source media="(min-width: 1150px)" srcSet={logoDesktop} />
              <source media="(min-width: 768px)" srcSet={logoTablet} />
              <img
                className="header__logo-image"
                src={logoMobile}
                alt="Логотип Mishka"
                width="86"
                height="35"
                title="Логотип Mishka"
              />
            </picture>
          </Link>
          <button
            className={toggleBtnClass}
            onClick={handleToggleBtnClick}
          >
            <span className="visually-hidden">
              {`${isMobileMenuOpened ? 'Закрыть' : 'Открыть'} меню`}
            </span>
          </button>
          <ul className={navListClass}>
            <li className="header__nav-item">
              <a className="header__nav-link" href="">Каталог товаров</a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="">Вязание на заказ</a>
            </li>
          </ul>
          <div className={menuWrapperClass}>
            <button
              className="header__search-btn"
              title="Поиск по сайту"
              area-label="Поиск по сайту"
            >
              <span className="header__search-btn-text">Поиск по сайту</span>
            </button>
            <button className="header__cart-btn">Корзина: пока пуста</button>
          </div>
          <ul className="header__sub-nav-list">
            <li className="header__sub-nav-item">
              <a className="header__sub-nav-link" href="">Новые поступления</a>
            </li>
            <li className="header__sub-nav-item">
              <a className="header__sub-nav-link" href="">Распродажа</a>
            </li>
          </ul>
          <p className="header__delivery">Бесплатная доставка по России</p>
        </nav>
      </header>
    </div>
  );
}
