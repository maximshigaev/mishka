import {
  FC,
  useState,
  useCallback,
} from 'react';

// Styles
import './reviews.scss';

// Components
import { Review } from '../';

// Constants
import { reviews } from '../../constants';

export const Reviews: FC = () => {
  const [currentReviewId, setCurrentReviewId] = useState(2);

  const handlePrevBtnClick = useCallback(() => setCurrentReviewId(currentReviewId - 1), [currentReviewId]);
  const handleNextBtnClick = useCallback(() => setCurrentReviewId(currentReviewId + 1), [currentReviewId]);

  return (
    <div className="content-wrapper">
      <section className="reviews">
        <h2 className="reviews__title">Отзывы</h2>
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <Review
                review={review}
                isVisible={currentReviewId === review.id}
              />
            </li>
          ))}
        </ul>
        <button
          className="reviews__button reviews__button--prev"
          title="Предыдущий отзыв"
          area-label="Предыдущий отзыв"
          disabled={currentReviewId === 0}
          onClick={handlePrevBtnClick}
        />
        <button
          className="reviews__button reviews__button--next"
          title="Слудующий отзыв"
          area-label="Следующий отзыв"
          disabled={currentReviewId === reviews.length}
          onClick={handleNextBtnClick}
        />
        <button className="button">Написать</button>
      </section>
    </div>
  );
}
