/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "[import]" }]*/

import React from 'react';
import '../../css/style.css';
import '../../css/css.css';

import Worker from './WorkersItem';
import workers from '../data/workers.json';

import Emmitt from '../../img/EmmittSouth.jpg';
import Joe from '../../img/JoeGrotto.jpg';

const photos = [Emmitt, Joe];

const Workers = () => {
    return (
        <section className="workers">
            {workers.map((i, idx) => <Worker key={idx} {...i} photoSrc={photos[idx]}/>)}
        </section>
    );
}

export default Workers;
