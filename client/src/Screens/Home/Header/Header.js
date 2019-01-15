import React, { Component } from 'react';
import './Header.css';

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
import doroLogo from '../../../Assets/imagen.png';
import picture7_currency from '../../../Assets/picture7_currency.jpg';
import video_image from '../../../Assets/video-image-800x666.jpg';

class header extends Component {
    state = {}
    render() {
        return (
            <div>
 <header class="header4">
            {/* <!-- BOTTOM BAR --> */}
            <nav class="navbar navbar-clip-path navbar-default" id="modeltheme-main-head">
                <div class="container">
                    <div class="row">
                        {/* <!-- LOGO --> */}
                        <div class="navbar-header col-12 col-lg-4">
                            {/* <!-- NAVIGATION BURGER MENU --> */}
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span class="sr-only"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>

                            <div class="logo">
						        <a href="index.html">
						            <img class="logoImg" src={doroLogo} alt="Cryptic" />
						        </a>
						    </div>
                        </div>

                        {/* <!-- NAV MENU --> */}

                        {/* <!-- NAV MENU --> */}
                        <div id="navbar" class="navbar-collapse collapse col-12 col-lg-8">
                            <ul class="menu nav navbar-nav pull-left nav-effect nav-menu">
                                <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="#">Home</a>
                                    {/* <ul class="sub-menu">
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item current_page_item"><a href="#">Main Home</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="#">Home ICO Landing Page</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="#">Home ICO Landing Page 2</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="#">Home ICO Consultant</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="#">Home Decentralized Coin</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="#">Home Exchange</a></li>
                                    </ul> */}
                                </li>
                                <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="assets/images/Whitepaper.pdf">WhitePaper</a></li>
                                <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#roadMapComponent">Road Map</a></li>
                                <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#teamComponent">Team</a></li>
                                
                                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"><a href="#">Pages</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item current_page_item"><a href="#">About us</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="#">How it works</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="#">Services</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="#">Our Team</a></li>
                                    </ul>
                                </li>
                                {/* <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"><a href="#">News</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="#">Blog Archive</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="#">What is bitcoin mining</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-post"><a href="#">Single Blog Page</a></li>
                                    </ul>
                                </li> */}
                                {/* <li class="new-badge menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"><a href="#">ICO Listings</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item current_page_item"><a href="#">ICO Listings Grid</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="#">ICO Listings List</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="#">ICO Listings Filters</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="#">Single ICO Page</a></li>
                                    </ul>
                                </li> */}
                                <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>

                        {/* <!-- RIGHT SIDE SOCIAL / ACTIONS BUTTONS --> */}
                        {/* <div class="col-12 col-md-2 right-side-social-actions visibile_group">

                          
                            <ul class="social-links">
                                <li><a href="#"><i class="fa fa-telegram"></i></a></li>
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                            </ul>

                        </div> */}
                    </div>
                </div>
            </nav>
        </header>

                
            </div>
        );
    }
}

export default header;