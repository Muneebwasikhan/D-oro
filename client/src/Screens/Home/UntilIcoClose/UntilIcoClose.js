import React, { Component } from 'react';
import './UntilIcoClose.css';

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

class UntilIcoClose extends Component {
    state = {}
    render() {
        return (
            <div>
             {/* <!-- Section3 - Cryptic Time until ico close --> */}
             <div class="clearfix"></div>
	                <div class="cryptic_time_close padding_80 data_background" data-background={cryptic_currency2}>
	                	<div class="container">
	                		<div class="row">
		                        <div class="col-sm-12">
		                            <div class="title-subtile-holder wow  ">
		                                <h1 class="section-title light_title fadeIn start_animation wow">TIME UNTIL ICO CLOSE</h1>
		                                <div class="section-subtitle light_subtitle fadeIn start_animation wow">Minimum purchase is 50 Coins tokens. Get a bonus from 5% to 25% <br /> on every token purchase</div>
		                            </div>
		                            <div class="spacer_40"></div>
		                            <div class="text-center row">
		                                <div id="modeltheme-countdown" class="modeltheme-countdown"></div>
		                            </div>
		                            <h4>TOTAL TOKENS BOUGHT</h4>
		                            <h1>91, 258, 141</h1>
		                            <h3>1 COIN = 0,3 USD</h3>
		                            <div class="spacer_20"></div>
		                            <div class="buy-coin text-center">
		                                <button class="btn">BUY COIN</button>
		                            </div>
		                        </div>
		                    </div>
		                </div>
                    </div>
                         
               </div>
        );
    }
}

export default UntilIcoClose;