import React, { Component } from 'react';
import './RuningCounter.css';

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

class RuningCounter extends Component {
    state = {}
    render() {
        return (
            <div>
              {/* <!-- Section4 - Cryptic Transactions --> */}
              <div class="clearfix"></div>
	                <div class="cryptic_transactions padding_80 data_background" data-background={counter}>
	                	<div class="container">
	                		<div class="row">
                                <div class="col-sm-3">
                                    <div class="stats-block statistics wow fadeIn">
                                        <div class="stats-head">
                                            <p class="stat-number skill"></p>
                                        </div>
                                        <div class="stats-content percentage text-white" data-perc="258"><span class="skill-count no-margin">258</span>
                                            <p class="text-white">Transactions in last 24h</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="stats-block statistics wow fadeIn">
                                        <div class="stats-head">
                                            <p class="stat-number skill"></p>
                                        </div>
                                        <div class="stats-content percentage text-white" data-perc="14"><span class="skill-count no-margin">14</span>
                                            <p class="text-white">Transactions per hour</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="stats-block statistics wow fadeIn">
                                        <div class="stats-head">
                                            <p class="stat-number skill"></p>
                                        </div>
                                        <div class="stats-content percentage text-white" data-perc="120"><span class="skill-count text-white no-margin">120</span>
                                            <p class="text-white">Largest Transactions</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="stats-block statistics wow fadeIn">
                                        <div class="stats-head">
                                            <p class="stat-number skill"></p>
                                        </div>
                                        <div class="stats-content percentage text-white" data-perc="5"><span class="skill-count">5</span>
                                            <p class="text-white">Years of Experience</p>
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

export default RuningCounter;