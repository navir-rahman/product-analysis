import React from 'react';
import useReview from '../hooks/useReview';
import Review from '../review/Review';
import './Reviews.css'

const Reviews = () => {
        const [ reviews, setreview] = useReview()
    return (
        <div className='reviewscontainer'>
            {
                reviews.map( (review, index)=> <Review key={review.id} review={review} ></Review>)
            }
        </div>
    );
};

export default Reviews;