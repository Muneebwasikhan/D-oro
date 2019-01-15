import React, { Component } from 'react';
import './LivePriceTable.css';

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

class LivePriceTable extends Component {
    state = {}
    render() {
        return (
            <div>
              {/* <!-- Section2 - Cryptic Live Price Tables  --> */}
        			<div class="clearfix"></div>
        			<div class="cryptic_live_price padding_80 data_background" data-background={cryptic_currency6}>
        				<div class="container">
        					<div class="row">
			                    <div class="col-sm-12">
	                                <div class="title-subtile-holder wow ">
	                                    <h1 class="section-title dark_title">Cryptocurrency Live Price Tables</h1>
	                                    <div class="section-subtitle dark_subtitle">Minimum purchase is 50 Coins tokens. Get a bonus from 5% to 25% <br/> on every token purchase</div>
	                                </div>
	                                <div class="spacer_80"></div>
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-6 col-md-3">
                                          <div class="live-coin live-coin-v3 text-center">
                                            <a href="#" class="show-code show-code-left">
                                              <i class="cc BTC" title="BTC"></i>
                                            </a>
                                            <p class="text-bold text-white no-margin">Price: $7058.32</p>
                                            <p class="text-bold text-white no-margin">Symbol: BTC <br /><i class="fa fa-caret-up text-green"></i> 0.62%</p>
                                          </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-3">
                                          <div class="live-coin live-coin-v3 text-center">
                                            <a href="#" class="show-code show-code-left">
                                              <i class="cc ETH" title="ETH"></i>
                                            </a>
                                            <p class="text-bold text-white no-margin">Price: $392.98</p>
                                            <p class="text-bold text-white no-margin">Symbol: ETH <br /><i class="fa fa-caret-up text-green" aria-hidden="true"></i> 0.15%</p>
                                          </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-3">
                                          <div class="live-coin live-coin-v3 text-center">
                                            <a href="#" class="show-code show-code-left">
                                              <i class="cc XRP" title="XRP"></i>
                                            </a>
                                            <p class="text-bold text-white no-margin">Price: $0.513296</p>
                                            <p class="text-bold text-white no-margin">Symbol: XRP <br /><i class="fa fa-caret-up text-green" aria-hidden="true"></i> 0.02%</p>
                                          </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-3">
                                          <div class="live-coin live-coin-v3 text-center">
                                            <a href="#" class="show-code show-code-left">
                                              <i class="cc DASH" title="DASH"></i>
                                            </a>
                                            <p class="text-bold text-white no-margin">Price: $330.075</p>
                                            <p class="text-bold text-white no-margin">Symbol: DASH <br /><i class="fa fa-caret-up text-green" aria-hidden="true"></i> 1.46%</p>
                                          </div>
                                        </div>
                                    </div>
	                                <div class="spacer_30"></div>
	                                <div class="row">
                                        <div class="col-xs-12">
                                          <div class="table table-striped background-black pricing-tables-live element-box-shadow no-margin">
                                            <table>
                                              <thead>
                                                <tr>
                                                  <th>Symbol</th>
                                                  <th>Name</th>
                                                  <th>USD</th>
                                                  <th>Change 1h</th>
                                                  <th>Change 24h</th>
                                                  <th>Change 7d</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td>BTC</td>
                                                  <td>Bitcoin</td>
                                                  <td>9,213</td>
                                                  <td>0.8 %</td>
                                                  <td>7.18 %</td>
                                                  <td>13.74 %</td>
                                                </tr>
                                                <tr>
                                                  <td>ETH</td>
                                                  <td>Ethereum</td>
                                                  <td>890.4</td>
                                                  <td>0.38 %</td>
                                                  <td>5.78 %</td>
                                                  <td>9.32 %</td>
                                                </tr>
                                                <tr>
                                                  <td>XRP</td>
                                                  <td>Ripple</td>
                                                  <td>1.063</td>
                                                  <td>-0.09 %</td>
                                                  <td>3.52 %</td>
                                                  <td>37.91 %</td>
                                                </tr>
                                                <tr>
                                                  <td>LTC</td>
                                                  <td>Litecoin</td>
                                                  <td>216.8</td>
                                                  <td>9.69 %</td>
                                                  <td>38.08 %</td>
                                                  <td>45.1 %</td>
                                                </tr>
                                                <tr>
                                                  <td>XMR</td>
                                                  <td>Monero</td>
                                                  <td>270.7</td>
                                                  <td>3.22 %</td>
                                                  <td>16.1 %</td>
                                                  <td>23.79 %</td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
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

export default LivePriceTable;