import React, { Component } from 'react';
import './Calculator.css';

import bitcurrency_member1 from '../../../Assets/bitcurrency_member1-1.jpg';
import bitcurrency_member2 from '../../../Assets/bitcurrency_member2-1.jpg';
import bitcurrency_member3 from '../../../Assets/bitcurrency_member3-1.jpg';
import bitcurrency_theme from '../../../Assets/bitcurrency_theme-2-800x666.jpg';
import bitcurrency_members from '../../../Assets/bitcurrency-members.jpg';
import counter from '../../../Assets/counter.jpg';
import cryptic_currency2 from '../../../Assets/cryptic-currency2.jpg';
import cryptic_currency6 from '../../../Assets/cryptic-currency6.jpg';
import cryptic_currency12 from '../../../Assets/cryptic-currency12.png';
import cryptic_icon from '../../../Assets/cryptic-icon.png';
import cryptic_theme from '../../../Assets/cryptic-theme.jpg';
import crytic_wp_theme3 from '../../../Assets/crytic_wp_theme3-800x666.jpg';
import footer from '../../../Assets/footer.jpg';
import logo_black from '../../../Assets/logo_black.png';
import doroLogo from '../../../Assets/doroLogo.png';
import picture7_currency from '../../../Assets/picture7_currency.jpg';
import video_image from '../../../Assets/video-image-800x666.jpg';

class Calculator extends Component {
    state = {}
    render() {
        return (
            <div>
              {/* <!-- Section6 - Cryptic COIN CALCULATOR --> */}
              <div class="clearfix"></div>
	                <div class="cryptic_coin padding_80 data_background" data-background={picture7_currency}>
	                	<div class="container">
	                		<div class="row">
                                <div class="col-sm-12">
                                    <div class="title-subtile-holder wow  ">
                                        <h1 class="section-title dark_title">COIN CALCULATOR</h1>
                                        <div class="section-subtitle dark_subtitle">Minimum purchase is 50 Coins tokens. Get a bonus from 5% to 25% <br /> on every token purchase</div>
                                    </div>
                                    <div class="spacer_80"></div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                        	<div class="spacer_30"></div>
                                            <p class="text-left">No more hassle. <br /> You don’t have to be constantly searching the web to get price updates. Just use our coin calculator and simply get the desired result with a simple click.</p>
                                            <div class="spacer_30"></div>
                                            <p class="text-left">From bitcoin, to ripple, to litecoin… You just select your weapons and we’ll explain the technicalities.</p>
                                            <div class="spacer_30"></div>
                                            <div class="exchange_calculator">
	                                            <div class="text-left">
	                                                <h2>BTC calculator:</h2>
	                                                <form id="btc_calc" class="cp-form">

	                                                    <input type="text" class="currency1value" value="1"/> BTC =

	                                                    <input type="text" class="currency2value" value="9.458"/>

	                                                    <select class="currency_switcher">
	                                                        <option value="6889.83">usd</option>
	                                                        <option value="5562.03">eur</option>
	                                                    </select>
	                                                </form>
	                                                <a href="#" style={{fontSize:"small"}}>Data by CryptoCompare API</a>
	                                            </div>
	                                        </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <figure>
                                                <img width="570" height="335" src={cryptic_currency12} alt="cryptic-currency" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                               
               </div>
        );
    }
}

export default Calculator;