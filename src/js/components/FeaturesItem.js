import React from 'react';

const defaultProps = {
    className : '',
    title     : '',
    content   : ''
}

const FeaturesItem = props => {

    const p = Object.assign({}, defaultProps, props);

    return (
        <div className={`features__item ${p.className}`}>
            <h3>{p.title}</h3>
            <p>{p.content}</p>
        </div>
    );
}

export default FeaturesItem;
