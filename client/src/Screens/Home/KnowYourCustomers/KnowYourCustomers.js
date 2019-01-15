import React, { Component } from 'react';
import './KnowYourCustomers.css';

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

class KnowYourCustomers extends Component {
    state = {}
    render() {
        return (
            <div>
             {/* <!-- Section8 - Cryptic Know Your Customer --> */}
             <div class="clearfix"></div>
	                <div class="cryptic_customer padding_80">
	                	<div class="container">
	                		<div class="row">
                                <div class="col-sm-6">
                                    <h2 class="fadeIn wow no-margin">Know Your Customer</h2>
                                    <div class="fadeIn wow">
                                        <p class="text-left"><span>Sign up for our weekly industry updates, insider perspectives and<br />in-depth market analysis.</span></p>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="fadeIn wow">
                                    	<div class="spacer_20"></div>
                                        <form id="mc4wp-form-1" class="mc4wp-form mc4wp-form-335" method="post" data-id="335" data-name="newsletter">
                                            <div class="mc4wp-form-fields">
                                                <div class="newsletter">
                                                    <input type="email" name="EMAIL" placeholder="Insert your email" required />
                                                    <input type="submit" value="Submit"/>
                                                </div>
                                                {/* <label style={{display: "none !important"}}>Leave this field empty if you're human:
                                                    <input type="text" name="_mc4wp_honeypot" value="" tabindex="-1" autocomplete="off"/>
                                                </label> */}
                                                <input type="hidden" name="_mc4wp_timestamp" value="1523438081"/>
                                                <input type="hidden" name="_mc4wp_form_id" value="335"/>
                                                <input type="hidden" name="_mc4wp_form_element_id" value="mc4wp-form-1"/>
                                            </div>
                                            <div class="mc4wp-response"></div>
                                        </form>
                                        {/* <!-- / MailChimp --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                              
               </div>
        );
    }
}

export default KnowYourCustomers;