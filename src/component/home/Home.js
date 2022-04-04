import './Home.css'
import React from 'react';
import useReview from '../hooks/useReview';
import Review from '../review/Review'


const Home = () => {
    const [ reviews, setreview] = useReview();
    return (
        <div className="home">
        <div className='homecontainer'>
            <div className="hometext">
                <h1>Portable Emergency Solar Radio</h1>
                <h3>2021 NEWEST DESIGN MD-090P: 4000mAh
                    replaceable li-ion battery can charge more than one smartphone.
                </h3>

                <button>See review</button>
            </div>
            <div className="homeimage">
                <img src={'light.webp'} alt="" />
            </div>
        </div>

            <h2>Customer Reviews({reviews.length})</h2>
        <div className="homeRivew">

            {
                reviews.slice(0, 3).map( (review, index)=> <Review key={review.id} review={review} ></Review>)
            }
        </div>
    </div>
    );
};

export default Home;