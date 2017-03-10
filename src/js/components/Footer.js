/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "[import]" }]*/

import React, { Component } from 'react';
import fb from '../../img/fb.svg';
import twitter from '../../img/twitter.svg';
import devvelaLogo from '../../img/devvela-logo.svg';
import '../../css/style.css';
import '../../css/css.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-top">
                    <p><strong>2017. App LTD.</strong> All right reserved.</p>
                    <div className="footer-top__nav">
                        <ul>
                            <li><a href="/">Contact us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>This work is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.</p>
                    <ul>
                        <li><a href="/"><img src={fb} alt="facebook"></img></a></li>
                        <li><a href="/"><img src={twitter} alt="facebook"></img></a></li>
                        <li><a href="https://devvela.com/"><img src={devvelaLogo} alt="devvela logo"></img></a></li>
                    </ul>
                </div>
            </footer>
        );
    }
}

export default Footer;
