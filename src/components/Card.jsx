import React from 'react';
import PricingFeature from './PricingFeature';

const Card = ({pricing}) => {
    console.log(pricing)
    return (
        <div className='flex flex-col items-center border bg-gray-400 rounded-2xl text-white space-y-3 p-3'>
            <div>
                <h1 className='text-5xl'>{pricing.name}</h1>
                <h3 className='text-3xl'>{pricing.price}</h3>
            </div>
            <div className='border rounded-2xl bg-gray-900 mx-5 p-3 flex-1'>
                <p>{pricing.description}</p>
                {
                    pricing.features.map((feature, index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
                }
            </div>
            <button className="btn w-fit mx-3 mt-4">Subscribe</button>
        </div>
    );
};

export default Card;