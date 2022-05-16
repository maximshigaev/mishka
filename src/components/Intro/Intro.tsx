import { FC } from 'react';

// Styles
import './intro.scss';

export const Intro: FC = () => (
  <div className="content-wrapper intro__wrapper">
    <section className="intro">
      <h1 className="intro__title">Милые штуки ручной <br /> работы для дома</h1>
      <ul className="intro__assortment-list">
        <li className="intro__assortment-item intro__assortment-item--interior">
          <a className="intro__assortment-link intro__assortment-link--interior"
            href=""
            title="Предметы интерьера"
          >
            Предметы интерьера
          </a>
        </li>
        <li className="intro__assortment-item intro__assortment-item--toys">
          <a className="intro__assortment-link intro__assortment-link--toys"
            href=""
            title="Детские игрушки"
          >
            Детские игрушки
          </a>
        </li>
      </ul>
    </section>
  </div>
);
