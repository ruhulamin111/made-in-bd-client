import React from 'react';
import SummaryItem from './SummaryItem';

const BusinessSummary = () => {
    const summarys = [
        {
            _id: 1,
            name: 'We Served',
            tittle: '50% more than 1 month',
            quantity: '100+'
        },
        {
            _id: 2,
            name: 'Annual Revenue',
            tittle: '50% more than 1 month',
            quantity: '1200M+'
        },
        {
            _id: 3,
            name: 'Reviews',
            tittle: '50% more than last month',
            quantity: '33K+'
        }
    ]

    return (
        <div className='my-12 '>
            <h1 className='text-center font-bold text-2xl text-primary my-5'>Made in BD Business Summary</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    summarys.map(summary => <SummaryItem
                        key={summary._id}
                        summary={summary}
                    ></SummaryItem>)
                }
            </div>
        </div>
    );
};

export default BusinessSummary;