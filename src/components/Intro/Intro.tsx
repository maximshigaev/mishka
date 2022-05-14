import { FC } from 'react';

// Styles
import './intro.scss';

export const Intro: FC = () => (
  <section className="intro">
    <h1 className="intro__title">Милые штуки ручной <br /> работы для дома</h1>
    <ul className="intro__assortment-list">
      <li className="intro__assortment-item intro__assortment-item--interior">Предметы интерьера</li>
      <li className="intro__assortment-item intro__assortment-item--toys">Детские игрушки</li>
    </ul>
  </section>
);
