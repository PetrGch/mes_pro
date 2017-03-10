import React from 'react';

import PriceOption from './PriceOption';

const PriceOptionsList = (props = {data: []}) => {
    return (
        <div className="pricing-line">
            {props.data.map((i, idx) => <PriceOption key={idx} text={i}/>)}
        </div>
    );
}

export default PriceOptionsList;
