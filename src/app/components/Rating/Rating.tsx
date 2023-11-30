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
        <span
          key={i}
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeRating(i + 1)}
          onMouseLeave={() => changeRating(rating)}
          onClick={() => onClick(i + 1)}
        >
          <StarIcon />
        </span>
      );
    });
    setRatingArray(updatedRating);
  };

  const changeRating = (i: number) => {
    if (!isEditable) return;

    constructRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) return;

    setRating(i);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
