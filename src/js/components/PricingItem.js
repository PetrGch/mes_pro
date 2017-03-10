import React from 'react';

import PriceOptionsList from './PriceOptionsList';

const defaultProps = {
    type      : '',
    price     : 0,
    options   : [],
    button    : '',
    colorGray : false
}

const PricingItem = props => {

    const p = Object.assign({}, defaultProps, props);
    const classList = [
        'pricing-item',
        p.colorGray ? 'pricing-item--bg-gray' : 'pricing-item--bg-none'
    ].join(' ');

    return (
        <div className={classList}>
            <h3>{p.type}</h3>
            <h4 dangerouslySetInnerHTML={{__html: `<span></span>${p.price}`}}></h4>
            <PriceOptionsList data={p.options}/>
            <button>{p.button}</button>
        </div>
    );

}

export default PricingItem;
