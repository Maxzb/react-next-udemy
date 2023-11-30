import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import StarIcon from './star.svg';
import cn from 'classnames';
import { useEffect, useState } from 'react';

export const Rating = ({
  isEditable,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedRating = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <StarIcon
          key={i}
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
          })}
        />
      );
    });
    setRatingArray(updatedRating);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
