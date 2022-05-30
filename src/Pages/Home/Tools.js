import React from 'react';
import Tool from './Tool';

const Tools = () => {
    const tools = [
        {
            _id: 1,
            name: 'Machinery',
            description: 'MachineryScanner is the only third-party review system dedicated to your industry. Our system helps you take control of your image and online reputation.',
            order: 100,
            available: 500,
            price: 100,
            img: 'https://i.ibb.co/qdSZdQ4/denny-muller-GZc6np-HL5-Wk-unsplash-1-1.jpg'
        },
        {
            _id: 2,
            name: 'Electric',
            description: 'MachineryScanner is the only third-party review system dedicated to your industry. Our system helps you take control of your image and online reputation.',
            order: 100,
            available: 500,
            price: 200,
            img: 'https://i.ibb.co/qdSZdQ4/denny-muller-GZc6np-HL5-Wk-unsplash-1-1.jpg'
        },
        {
            _id: 3,
            name: 'Printing',
            description: 'MachineryScanner is the only third-party review system dedicated to your industry. Our system helps you take control of your image and online reputation.',
            order: 100,
            available: 500,
            price: 300,
            img: 'https://i.ibb.co/qdSZdQ4/denny-muller-GZc6np-HL5-Wk-unsplash-1-1.jpg'
        },
    ]

    return (
        <div>
            <h1 className='text-center font-bold text-2xl text-primary my-5'>Made in BD Tools</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;