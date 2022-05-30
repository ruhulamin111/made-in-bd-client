import React, { useState, useEffect } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tool')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])

    return (
        <div className='my-12'>
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