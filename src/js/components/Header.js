/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "[import]" }]*/

import React, { Component } from 'react';
import logo from '../../img/logo.svg';
import fb from '../../img/fb.svg';
import twitter from '../../img/twitter.svg';
import '../../css/style.css';
import '../../css/css.css';

import authData from '../data/auth.json';

const buildAuthURL = (data) => {
    const parameters = Object.keys(data.params).map(k => `${k}=${encodeURIComponent(data.params[k])}`).join('&');
    return `${data.baseUrl}?${parameters}`;
};

class Header extends Component {
    render() {
        return (
            <header className="header">
                <nav className="header-nav">
                    <a href="/"><img src={logo} className="header-nav__logo" alt="MessagePro"></img></a>
                    <div className="header-nav__menu">
                        <a href="/"><img src={fb} alt="facebook"></img></a>
                        <a href="/"><img src={twitter} alt="twitter"></img></a>
                    </div>
                </nav>
                <div className="header-content">
                    <h1>One App to rule all chat`s channels</h1>
                    <div className="header-content__img-b">
                        <div className="header-content__img-i header-content__img-1"></div>
                        <div className="header-content__coming-soon">
                            <div style={{marginRight:'10px'}}>Coming soon</div>
                            <div className="header-content__img-i header-content__img-2"></div>
                            <div className="header-content__img-i header-content__img-3"></div>
                            <div className="header-content__img-i header-content__img-4"></div>
                        </div>
                    </div>
                    <a className="add-to-slack add-to-slack--user"
                           target="_blank"
                           href={buildAuthURL(authData)}>
                           Try it
                    </a>
                </div>
            </header>
        );
    }
}

export default Header;
