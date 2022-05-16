import { FC } from 'react';

// Styles
import './review.scss';

type TProps = {
  review: {
    id: number,
    text: string,
    author: string,
    link: string,
  },
  isVisible: boolean,
}

export const Review: FC<TProps> = ({ review, isVisible }) => isVisible
  ? (
    <>
      <p className="review__text">
        {review.text}
      </p>
      <span className="review__author">
        {review.author}
      </span>
      <span className="review__link">
        {review.link}
      </span>
    </>
  )
  : null;
