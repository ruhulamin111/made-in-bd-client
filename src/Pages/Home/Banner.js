import React from 'react';

const Banner = () => {
    return (
        <div class="hero ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/qdSZdQ4/denny-muller-GZc6np-HL5-Wk-unsplash-1-1.jpg" alt='' />
                <div>
                    <h1 class="text-5xl font-bold py-5">Made in BD</h1>
                    <h1 class="text-3xl font-bold">Manufacturing Tools Company</h1>
                    <p class="py-5">MachineryScanner is the only third-party review system dedicated to your industry. Our system helps you take control of your image and online reputation.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;