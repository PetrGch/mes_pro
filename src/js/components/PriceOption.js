import React from 'react';

const PriceOption = (props = {text: ''}) => {
    return (
        <div className="pricing-item__line">
            <p>{props.text}</p>
        </div>
    );
}

export default PriceOption;
