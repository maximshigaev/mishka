import { FC } from 'react';
import {
  Link,
  useLocation,
} from 'react-router-dom';

// Styles
import './footer.scss';

// Constants
import { Routes } from '../../constants';

// Images
import logo from '../../images/logo-footer.png';

export const Footer: FC = () => {
  const { pathname: path } = useLocation();  

  return (
    <div className="content-wrapper">
      <footer className="footer">
        <Link
          className="footer__logo-link"
          to={(path !== Routes.MAIN_PAGE) ? Routes.MAIN_PAGE : ''}
        >
            <img
              src={logo}
              alt="Логотип Mishka"
              width="102"
              height="34"
              title="Логотип Mishka"
            />
        </Link>
        <ul className="footer__social-list">
          <li>
            <a
              className="footer__social-link footer__social-link--instagram"
              href="#"
              area-label="Instagram"
            />
          </li>
          <li>
            <a
              className="footer__social-link footer__social-link--facebook"
              href="#"
              area-label="Facebook"
            />
          </li>
          <li>
            <a
              className="footer__social-link footer__social-link--twitter"
              href="#"
              area-label="Twitter"
            />
          </li>
        </ul>
        <p className="footer__copyright">
          Разработано
          <a
            className="footer__copyright-link"
            href="#"
            area-label="HTML Academy"
          />
        </p>
      </footer>
    </div>
  );
}
