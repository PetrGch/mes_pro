/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "[import]" }]*/

import React, { Component } from 'react';
import '../../css/style.css';
import '../../css/css.css';

import Feature from './FeaturesItem';
import features from '../data/features.json';

const Features = () => {
    return (
        <section className="features">
            <h2>Features</h2>
            <div className="features__content">
                {features.map((i, idx) => <Feature key={idx} {...i}/>)}
            </div>
        </section>
    );
}

export default Features;
