import React from 'react';
import man from '../../Images/man.jpg'
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'John Knedy',
            img: man,
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribution to using Content here, content',
        },
        {
            _id: 2,
            name: 'John Knedy',
            img: man,
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribution to using Content here, content',
        },
        {
            _id: 3,
            name: 'John Knedy',
            img: man,
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribution to using Content here, content',
        }
    ]

    return (
        <div className='my-12'>
            <h1 className='text-center font-bold text-2xl text-primary my-5'>Ours Valuable Customer Reviews</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>

        </div>
    );
};

export default Reviews;