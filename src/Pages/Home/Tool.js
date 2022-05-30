import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, name, img, description, price, order, available } = tool;
    const navigate = useNavigate();
    const purchase = id => {
        navigate(`/tool/${id}`)
    }

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
                    <button onClick={() => purchase(_id)} class="btn btn-primary ">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;