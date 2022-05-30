import React from 'react';

const SummaryItem = ({ summary }) => {
    const { name, tittle, quantity } = summary;

    return (
        <div >
            <div class="stat-figure text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-16 h-16 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <div class="stat-title">{name}</div>
            <div class="stat-value text-primary">{quantity}</div>
            <div class="stat-desc">{tittle} 21% more than last month</div>
        </div>
    );
};

export default SummaryItem;