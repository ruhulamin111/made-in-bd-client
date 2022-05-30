import React from 'react';

const LatestTool = ({ latest }) => {
    const { img, name, description, price, order, available } = latest;

    return (
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p>Price : {price} $ Per Unit</p>
                <p>Minimum Order : {order} Unit</p>
                <p>Available Product : {available} Unit</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary ">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default LatestTool;