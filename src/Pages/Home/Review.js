import React from 'react';

const Review = ({ review }) => {
    const { text, img, name } = review

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{text}</p>
                <div className=" flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-4">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl">{name}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;