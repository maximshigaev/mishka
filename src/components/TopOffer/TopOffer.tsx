import { FC } from 'react';

// Styles
import './topOffer.scss';

// Images
import topOfferMobile from '../../images/top-offer-mobile.png';
import topOfferTablet from '../../images/top-offer-tablet.png';
import topOfferDesktop from '../../images/top-offer-desktop.png';

export const TopOffer: FC = () => (
  <div className="content-wrapper top-offer__wrapper">
    <section className="top-offer">
      <h2 className="visually-hidden">Товар недели</h2>
      <h3 className="top-offer__title">Вязаные корзинки</h3>
      <span className="top-offer__hint">Товар недели</span>
      <p className="top-offer__info">
        Экологически чистая пряжа, ручная работа. Доступны в шести расцветках, и трех размерах.
      </p>
      <dl className="top-offer__list">
        <dt className="top-offer__term">Цвет:</dt>
        <dd className="top-offer__description">«Тиффани»/серый</dd>
        <dt className="top-offer__term">Диаметр:</dt>
        <dd className="top-offer__description">25 см</dd>
        <dt className="top-offer__term">Высота:</dt>
        <dd className="top-offer__description">15 см</dd>
      </dl>
      <div className="top-offer__image-wrapper">
        <picture>
          <source media="(min-width: 1150px)" srcSet={topOfferDesktop} />
          <source media="(min-width: 768px)" srcSet={topOfferTablet} />
          <img
            className="top-offer__image"
            src={topOfferMobile}
            alt="Вязаные корзинки"
            width="260"
            height="315"
            title="Вязаные корзинки"
          />
        </picture>
      </div>
      <p className="top-offer__price">Цена: 990 руб.</p>
      <button className="button top-offer__button" title="Заказать">Заказать</button>
    </section>
  </div>
);
