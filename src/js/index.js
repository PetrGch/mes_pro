/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "[import]" }]*/

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Features from './components/Features';
import Workers from './components/Workers';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import '../css/css.css';
import '../css/style.css';

ReactDOM.render(
    <div>
        <Header />
        <Features />
        <Workers />
        <Pricing />
        <Footer />
    </div>,
  document.getElementById('root')
);
