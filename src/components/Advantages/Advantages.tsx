import { FC } from 'react';

// Styles
import './advantages.scss';

export const Advantages: FC = () => (
  <div className="content-wrapper">
    <section className="advantages">
      <h2 className="advantages__title">Коротко о нас:</h2>
      <ul className="advantages__list">
        <li className="advantages__item advantages__item--materials">Экологически <br /> чистые материалы</li>
        <li className="advantages__item advantages__item--style">Скандинавский стиль <br /> по российской цене</li>
        <li className="advantages__item advantages__item--likes">Увеличивает лайки <br /> на фотографиях</li>
        <li className="advantages__item advantages__item--love">Связано вручную с <br /> любовью и умилением</li>
        <li className="advantages__item advantages__item--support">Поддержка отечественного производителя</li>
        <li className="advantages__item advantages__item--package">Поставляется в <br /> подарочной упаковке</li>
      </ul>
    </section>
  </div>
);
