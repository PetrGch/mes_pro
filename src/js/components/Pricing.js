/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "[import]" }]*/

import React from 'react';
import '../../css/style.css';
import '../../css/css.css';

import PricingItem from './PricingItem';
import pricing from '../data/pricing.json';

const Pricing = () =>  {
    return (
        <section className="pricing">
            <h2>Pricing</h2>
            <div className='pricing__content'>
                {!!pricing.length ? pricing.map((i, idx) => <PricingItem key={idx} {...i}/>) : <p>no options</p>}
            </div>
        </section>
    );
}

export default Pricing;
