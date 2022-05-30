import React from 'react';
import LatestTool from './LatestTool';

const LatestTools = () => {
    const latests = [
        {
            _id: 1,
            name: 'Bearing ',
            description: 'MachineryScanner is the only third-party review system dedicated to your industry. Our system helps you take control of your image and online reputation.',
            order: 200,
            available: 1000,
            price: 100,
            img: 'https://i.ibb.co/mH7ZsNS/elena-rouame-9-JU2-CKqtw0-M-unsplash.jpg'
        },
        {
            _id: 2,
            name: 'Rotary Pump',
            description: 'MachineryScanner is the only third-party review system dedicated to your industry. Our system helps you take control of your image and online reputation.',
            order: 200,
            available: 1000,
            price: 200,
            img: 'https://i.ibb.co/mH7ZsNS/elena-rouame-9-JU2-CKqtw0-M-unsplash.jpg'
        },
        {
            _id: 3,
            name: 'Auto Parts',
            description: 'MachineryScanner is the only third-party review system dedicated to your industry. Our system helps you take control of your image and online reputation.',
            order: 200,
            available: 1000,
            price: 300,
            img: 'https://i.ibb.co/mH7ZsNS/elena-rouame-9-JU2-CKqtw0-M-unsplash.jpg'
        }
    ];

    return (
        <div className='my-12'>
            <h1 className='text-center font-bold text-2xl text-primary my-5'>Made in BD Trending Tools</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    latests.map(latest => <LatestTool
                        key={latest._id}
                        latest={latest}
                    ></LatestTool>)
                }
            </div>
        </div>
    );
};

export default LatestTools;