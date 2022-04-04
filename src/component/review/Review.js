import './Review.css'
import React from 'react';

const Review = (props) => {

    const { name, ratting, discription, id } = props.review
    return (
        <div className='reviewcontainer'>
            <div className="uname">
                <h3>
                 {name}
                </h3>
                <h5>Reating:{ratting} </h5>
            </div>
            <p className="udisc">
                {discription}
            </p>

        </div>
    );
};

export default Review;