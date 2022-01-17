import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import '../App.css'

import Review from './Review/Review';

const Reviews = () => {
  const reviews = useSelector((state) => state.reviews);

  return(
    <div>
      {reviews.map((rev) => (
        <Card>
          <Card.Body>
            <Review
              review = {rev}
            />
          </Card.Body>
        </Card>
      ))}
    </div>
    );
};

export default Reviews;