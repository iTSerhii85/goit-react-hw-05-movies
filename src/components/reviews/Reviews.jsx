import { getReviewsBiId } from 'fetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Li, Ul } from './Reviews.style';

const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    getReviewsBiId(movieId).then(data => setReviews(data.results));

    return function cleanup() {
      getReviewsBiId(movieId);
    };
  }, [movieId]);

  if (reviews !== '') {
    return (
      <>
        <Ul>
          {reviews.map(review => (
            <Li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </Li>
          ))}
        </Ul>
      </>
    );
  }
};
export default Reviews;
