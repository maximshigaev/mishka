import { FC } from 'react';

// Styles
import './contacts.scss';

export const Contacts: FC = () => (
  <div className="content-wrapper">
    <section>
      <h2 className="contacts__title">Контакты</h2>
      <dl>
        <dt className="contacts__term">e-mail:</dt>
        <dd className="contacts__description contacts__description--email">info@mimimishkashop.ru</dd>
        <dt className="contacts__term">адрес:</dt>
        <dd className="contacts__description">г. Санкт-Петербург, ул. Большая Конюшенная, <br /> д. 19/8, офис 101</dd>
      </dl>
      <iframe
        className="contacts__map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.
        603625300295!2d30.320858715957424!3d59.93871916905443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.	1!3m3!1m2!1s0x4696310fca145cc1%3A0x42b32648d8238007!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L
        3QvdCw0Y8g0YPQuy4sIDE5LzgsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTExODY!5e0!3m2!1sru!2sru!
        4v1583130603431!5m2!1sru!2sru"
      />
      <button className="button contacts__button" title="Напишите нам">Напишите нам</button>
    </section>
  </div>
);
