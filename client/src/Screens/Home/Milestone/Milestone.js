import React, { Component } from 'react';
import './Milestone.css';

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

class Milestone extends Component {
    state = {}
    render() {
        return (
            <div>
             {/* <!-- Section5 - Cryptic Milestones --> */}
	                <div class="clearfix"></div>
                    <div id="roadMapComponent" class="cryptic_milestones padding_80 data_background" data-background={bitcurrency_members}>
                    	<div class="container">
                    		<div class="row">
                                <div class="col-sm-12">
                                    <div class="title-subtile-holder wow  fadeIn">
                                        <h1 class="section-title dark_title">MILESTONES</h1>
                                        <div class="section-subtitle dark_subtitle">Minimum purchase is 50 Coins tokens. Get a bonus from 5% to 25% <br /> on every token purchase</div>
                                    </div>
                                    <div class="spacer_40"></div>
                                    <div class="clearfix"></div>
                                    <section id="cd-timeline" class=" cd-container ">
                                        <div class="mt_shortcode_timeline_items cd-timeline-block">
                                            <div class="cd-timeline-img cd-picture  bounce-in"><img src={cryptic_icon} alt="cryptic-icon" /></div>
                                            {/* <!-- cd-timeline-img --> */}
                                            <div class="cd-timeline-content  bounce-in">
                                                <h3 class="timeline_item_title  bounce-in">Pre-ICO</h3>
                                                <p class="timeline_item_content  bounce-in">Every idea has to start somewhere. For us, this was inception.</p><a href="#" class="cd-read-more">Read More</a>
                                                <p class="cd-date  bounce-in">2017 November 15th</p>
                                            </div>
                                            {/* <!-- cd-timeline-content --> */}
                                        </div>
                                        <div class="mt_shortcode_timeline_items cd-timeline-block">
                                            <div class="cd-timeline-img cd-picture"><img src={cryptic_icon} alt="cryptic-icon" /></div>
                                            {/* <!-- cd-timeline-img --> */}
                                            <div class="cd-timeline-content">
                                                <h3 class="timeline_item_title">Oro ICO</h3>
                                                <p class="timeline_item_content">With a userbase of 200 members, we were only just setting up camp.</p><a href="#" class="cd-read-more">Read More</a>
                                                <p class="cd-date">2017 November 20th</p>
                                            </div>
                                            {/* <!-- cd-timeline-content --> */}
                                        </div>
                                        <div class="mt_shortcode_timeline_items cd-timeline-block">
                                            <div class="cd-timeline-img cd-picture"><img src={cryptic_icon} alt="cryptic-icon" /></div>
                                            {/* <!-- cd-timeline-img --> */}
                                            <div class="cd-timeline-content">
                                                <h3 class="timeline_item_title">CHP launch on Oro</h3>
                                                <p class="timeline_item_content">The release of our long-awaited token.</p><a href="#" class="cd-read-more">Read More</a>
                                                <p class="cd-date">2018 January 10th</p>
                                            </div>
                                            {/* <!-- cd-timeline-content --> */}
                                        </div>
                                        <div class="mt_shortcode_timeline_items cd-timeline-block">
                                            <div class="cd-timeline-img cd-picture"><img src={cryptic_icon} alt="cryptic-icon" /></div>
                                            {/* <!-- cd-timeline-img --> */}
                                            <div class="cd-timeline-content">
                                                <h3 class="timeline_item_title">Oro Listed in Exchanges</h3>
                                                <p class="timeline_item_content">A reason to say „Started from the bottom, now we’re here.”</p><a href="#" class="cd-read-more">Read More</a>
                                                <p class="cd-date">2018 February 5th</p>
                                            </div>
                                            {/* <!-- cd-timeline-content --> */}
                                        </div>
                                        <div class="mt_shortcode_timeline_items cd-timeline-block">
                                            <div class="cd-timeline-img cd-picture"><img src={cryptic_icon} alt="cryptic-icon" /></div>
                                            {/* <!-- cd-timeline-img --> */}
                                            <div class="cd-timeline-content">
                                                <h3 class="timeline_item_title">Mobile Application</h3>
                                                <p class="timeline_item_content">You know the famed Steve Jobs saying ”There’s an app for that?”. Of course, there had to be an app for Oro as well.</p><a href="#" class="cd-read-more">Read More</a>
                                                <p class="cd-date">2018 March 14th</p>
                                            </div>
                                            {/* <!-- cd-timeline-content --> */}
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                               
               </div>
        );
    }
}

export default Milestone;