import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
    return (
        <p className='flex items-center gap-3 mt-4'>
            <CircleCheckBig className='text-green-500'></CircleCheckBig>{feature}
        </p>
    );
};

export default PricingFeature;