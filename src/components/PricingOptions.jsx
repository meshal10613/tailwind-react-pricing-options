import { use } from "react";
import Card from "./Card";
import DaisyPricing from "./DaisyPricing";

const PricingOptions = ({pricingPromise}) => {
    const pricingData = use(pricingPromise);
    return (
        <div className="mx-auto w-10/12 text-center space-y-5">
            <h2 className="text-6xl">Get Our Membership</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    pricingData.map(pricing => <Card key={pricing.id} pricing={pricing}></Card>)
                }
                {/* {
                    pricingData.map((pricing) => <DaisyPricing key={pricing.id} pricing={pricing}></DaisyPricing>)
                } */}
            </div>
        </div>
    );
};

export default PricingOptions;