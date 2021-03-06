import React, { Component } from 'react';
import Slider from './Slider/Slider';
import bitcurrency_member1 from '../../Assets/bitcurrency_member1-1.jpg';
import bitcurrency_member2 from '../../Assets/bitcurrency_member2-1.jpg';
import bitcurrency_member3 from '../../Assets/bitcurrency_member3-1.jpg';
import bitcurrency_theme from '../../Assets/bitcurrency_theme-2-800x666.jpg';
import bitcurrency_members from '../../Assets/bitcurrency-members.jpg';
import counter from '../../Assets/counter.jpg';
import cryptic_currency2 from '../../Assets/cryptic-currency2.jpg';
import cryptic_currency6 from '../../Assets/cryptic-currency6.jpg';
import cryptic_currency12 from '../../Assets/cryptic-currency12.png';
import cryptic_icon from '../../Assets/cryptic-icon.png';
import cryptic_theme from '../../Assets/cryptic-theme.jpg';
import crytic_wp_theme3 from '../../Assets/crytic_wp_theme3-800x666.jpg';
import footer from '../../Assets/footer.jpg';
import logo_black from '../../Assets/logo_black.png';
import logo from '../../Assets/logo.png';
import picture7_currency from '../../Assets/picture7_currency.jpg';
import video_image from '../../Assets/video-image-800x666.jpg';


class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                 <div class="cryptic_preloader_holder v2_ball_pulse">
        <div class="cryptic_preloader v2_ball_pulse">
            <div class="loaders">
                <div class="loader">
                    <div class="loader-inner ball-pulse">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modeltheme-modal" id="modal-log-in">
        <div class="modeltheme-content" id="login-modal-content">
            <h3 class="relative"> Login to Your Account </h3>
            <div class="modal-content row">
                <div class="col-md-12">
                    <div class="alert alert-success alert-dismissible cryptic-demo-login">
                        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                        <strong>Username:</strong> cryptic_demo
                        <br/>
                        <strong>Password:</strong> cryptic_demo
                    </div>

                    <form name="loginform" id="loginform" method="post">
                        <p class="login-username">
                            <label for="user_login">Username or Email Address</label>
                            <input type="text" name="log" id="user_login" class="input" value="" size="20"/>
                        </p>
                        <p class="login-password">
                            <label for="user_pass">Password</label>
                            <input type="password" name="pwd" id="user_pass" class="input" value="" size="20"/>
                        </p>
                        <p class="login-remember">
                            <label><input name="rememberme" type="checkbox" id="rememberme" value="forever"/> Remember Me</label>
                        </p>
                        <p class="login-submit">
                            <input type="submit" name="submit" id="submit" class="button button-primary" value="Log In"/>
                            <input type="hidden" name="redirect_to" value="https://cryptic.modeltheme.com/"/>
                        </p>
                    </form>
                    <p class="um-notice err text-center">Registration is currently disabled</p>
                </div>
            </div>
        </div>
        <div class="modeltheme-content" id="signup-modal-content">
            <h3 class="relative"> Personal Details </h3>
            <div class="modal-content row">
                <div class="col-md-12"> [ultimatemember form_id=16587] </div>
            </div>
        </div>
    </div>

    <div class="modeltheme-overlay"></div>

    {/* <!-- Fixed Search Form --> */}
    <div class="fixed-search-overlay">
        {/* <!-- Close Sidebar Menu + Close Overlay --> */}
        {/* <i class="icon-close icons"></i> */}
        {/* <!-- INSIDE SEARCH OVERLAY --> */}
        <div class="fixed-search-inside">
            <div class="modeltheme-search">
                <form method="GET">
                    <input class="search-input" placeholder="Enter search term..." type="search" value="" name="s" id="search"/>
                    <i class="fa fa-search"></i>
                    <input type="hidden" name="post_type" value="post"/>
                </form>
            </div>
        </div>
    </div>

    {/* <!-- Fixed Sidebar Overlay --> */}
    <div class="fixed-sidebar-menu-overlay"></div>
    {/* <!-- Fixed Sidebar Menu --> */}
    <div class="relative fixed-sidebar-menu-holder header7">
        <div class="fixed-sidebar-menu">
            {/* <!-- Close Sidebar Menu + Close Overlay --> */}
            {/* <i class="icon-close icons"></i> */}
            {/* <!-- Sidebar Menu Holder --> */}
            <div class="header7 sidebar-content">
                {/* <!-- RIGHT SIDE --> */}
                <div class="left-side">
                    <h1 class="logo">
                        <a href="index.html">
                            <img src={logo_black} alt="Cryptic" />
                        </a>
                    </h1>
                    <aside id="search-3" class="widget widget_search">
                        <form role="search" method="get" class="search-form" action="https://cryptic.modeltheme.com/">
                            <label>
                                <span class="screen-reader-text">Search for:</span>
                                <input type="search" class="search-field" placeholder="Search &hellip;" value="" name="s"/>
                            </label>
                            <input type="submit" class="search-submit" value="Search"/>
                        </form>
                    </aside>
                    <aside id="text-4" class="widget widget_text">
                        <h1 class="widget-title">Crypto Ticker</h1>
                        <div class="textwidget">
                            <div id="ccpw-list-widget16255" class="ccpw-widget">
                                <table class="ccpw_table">
                                    <thead>
                                        <tr>
                                            <th>Crypto Currency</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="ccpw_icon ccpw_coin_logo">
                                                	<img alt="BTC" src="assets/plugins/cryptocurrency-price-ticker-widget/assets/coin-logo/btc.svg" />
                                                </div>
                                                <div class="ccpw_coin_info">
                                                    <span class="name">Bitcoin</span>
                                                    <br/>
                                                    <span class="coin_symbol">(BTC)</span>
                                                </div>
                                            </td>
                                            <td class="price">
                                                <div class="price-value"><i class="fa fa-usd" aria-hidden="true"></i>6855.83</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="ccpw_icon ccpw_coin_logo">
                                                	<img alt="ETH" src="assets/plugins/cryptocurrency-price-ticker-widget/assets/coin-logo/eth.svg" />
                                                </div>
                                                <div class="ccpw_coin_info">
                                                    <span class="name">Ethereum</span>
                                                    <br/>
                                                    <span class="coin_symbol">(ETH)</span>
                                                </div>
                                            </td>
                                            <td class="price">
                                                <div class="price-value"><i class="fa fa-usd" aria-hidden="true"></i>416.979</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="ccpw_icon ccpw_coin_logo">
                                                	<img alt="XRP" src="assets/plugins/cryptocurrency-price-ticker-widget/assets/coin-logo/xrp.svg" />
                                                </div>
                                                <div class="ccpw_coin_info">
                                                    <span class="name">Ripple</span>
                                                    <br/>
                                                    <span class="coin_symbol">(XRP)</span>
                                                </div>
                                            </td>
                                            <td class="price">
                                                <div class="price-value"><i class="fa fa-usd" aria-hidden="true"></i>0.489516</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="ccpw_icon ccpw_coin_logo">
                                                	<img alt="BCH" src="assets/plugins/cryptocurrency-price-ticker-widget/assets/coin-logo/bch.svg" />
                                                </div>
                                                <div class="ccpw_coin_info">
                                                    <span class="name">Bitcoin Cash</span>
                                                    <br/>
                                                    <span class="coin_symbol">(BCH)</span>
                                                </div>
                                            </td>
                                            <td class="price">
                                                <div class="price-value"><i class="fa fa-usd" aria-hidden="true"></i>652.101</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="ccpw_icon ccpw_coin_logo">
                                                	<img alt="LTC" src="assets/plugins/cryptocurrency-price-ticker-widget/assets/coin-logo/ltc.svg" />
                                                </div>
                                                <div class="ccpw_coin_info">
                                                    <span class="name">Litecoin</span>
                                                    <br/>
                                                    <span class="coin_symbol">(LTC)</span>
                                                </div>
                                            </td>
                                            <td class="price">
                                                <div class="price-value"><i class="fa fa-usd" aria-hidden="true"></i>114.335</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="ccpw_icon ccpw_coin_logo">
                                                	<img alt="ADA" src="assets/plugins/cryptocurrency-price-ticker-widget/assets/coin-logo/ada.svg" />
                                                </div>
                                                <div class="ccpw_coin_info">
                                                    <span class="name">Cardano</span>
                                                    <br/>
                                                    <span class="coin_symbol">(ADA)</span>
                                                </div>
                                            </td>
                                            <td class="price">
                                                <div class="price-value"><i class="fa fa-usd" aria-hidden="true"></i>0.15502</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="ccpw_icon ccpw_coin_logo">
                                                	<img alt="MIOTA" src="assets/plugins/cryptocurrency-price-ticker-widget/assets/coin-logo/miota.svg" />
                                                </div>
                                                <div class="ccpw_coin_info">
                                                    <span class="name">IOTA</span>
                                                    <br/>
                                                    <span class="coin_symbol">(MIOTA)</span>
                                                </div>
                                            </td>
                                            <td class="price">
                                                <div class="price-value"><i class="fa fa-usd" aria-hidden="true"></i>1.02488</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="ccpw_icon ccpw_coin_logo">
                                                	<img alt="XMR" src="assets/plugins/cryptocurrency-price-ticker-widget/assets/coin-logo/xmr.svg" />
                                                </div>
                                                <div class="ccpw_coin_info">
                                                    <span class="name">Monero</span>
                                                    <br/>
                                                    <span class="coin_symbol">(XMR)</span>
                                                </div>
                                            </td>
                                            <td class="price">
                                                <div class="price-value"><i class="fa fa-usd" aria-hidden="true"></i>166.379</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="ccpw_icon ccpw_coin_logo">
                                                	<img alt="DASH" src="assets/plugins/cryptocurrency-price-ticker-widget/assets/coin-logo/dash.svg" />
                                                </div>
                                                <div class="ccpw_coin_info">
                                                    <span class="name">Dash</span>
                                                    <br/>
                                                    <span class="coin_symbol">(DASH)</span>
                                                </div>
                                            </td>
                                            <td class="price">
                                                <div class="price-value"><i class="fa fa-usd" aria-hidden="true"></i>301.285</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="ccpw_icon ccpw_coin_logo">
                                                	<img alt="XEM" src="assets/plugins/cryptocurrency-price-ticker-widget/assets/coin-logo/xem.svg" />
                                                </div>
                                                <div class="ccpw_coin_info">
                                                    <span class="name">NEM</span>
                                                    <br/>
                                                    <span class="coin_symbol">(XEM)</span>
                                                </div>
                                            </td>
                                            <td class="price">
                                                <div class="price-value"><i class="fa fa-usd" aria-hidden="true"></i>0.235486</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- HEADER --> */}
    <div id="page" class="hfeed site">
        <header class="header4">
            {/* <!-- BOTTOM BAR --> */}
            <nav class="navbar navbar-default" id="modeltheme-main-head">
                <div class="container">
                    <div class="row">
                        {/* <!-- LOGO --> */}
                        <div class="navbar-header col-sm-12 col-md-2">
                            {/* <!-- NAVIGATION BURGER MENU --> */}
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span class="sr-only"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>

                            <h1 class="logo">
						        <a href="index.html">
						            <img src={logo} alt="Cryptic" />
						        </a>
						    </h1>
                        </div>

                        {/* <!-- NAV MENU --> */}

                        {/* <!-- NAV MENU --> */}
                        <div id="navbar" class="navbar-collapse collapse col-sm-12 col-md-7">
                            <ul class="menu nav navbar-nav pull-left nav-effect nav-menu">
                                <li class="homepages-badge menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children"><a href="index.html">Home</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item current_page_item"><a href="index.html">Main Home</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="home-ico-landing-page.html">Home ICO Landing Page</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="home-ico-landing-page-v2.html">Home ICO Landing Page 2</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="home-ico-consultant.html">Home ICO Consultant</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="home-ico-decentralized.html">Home Decentralized Coin</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="home-exchange.html">Home Exchange</a></li>
                                    </ul>
                                </li>
                                <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="assets/images/Whitepaper.pdf">WhitePaper</a></li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"><a href="#">Pages</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item current_page_item"><a href="about-us.html">About us</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="how-it-works.html">How it works</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="services.html">Services</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="our-team.html">Our Team</a></li>
                                    </ul>
                                </li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"><a href="#">News</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="blog.html">Blog Archive</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="blog-what-is-bitcoin-mining.html">What is bitcoin mining</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-post"><a href="blog-affiliate-program.html">Single Blog Page</a></li>
                                    </ul>
                                </li>
                                <li class="new-badge menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"><a href="#">ICO Listings</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item current_page_item"><a href="ico-listings-grid.html">ICO Listings Grid</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="ico-listings-list.html">ICO Listings List</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="ico-listings-filter.html">ICO Listings Filters</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="ico-listings-single.html">Single ICO Page</a></li>
                                    </ul>
                                </li>
                                <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>

                        {/* <!-- RIGHT SIDE SOCIAL / ACTIONS BUTTONS --> */}
                        <div class="col-sm-12 col-md-3 right-side-social-actions visibile_group">

                            {/* <!-- ACTIONS BUTTONS GROUP --> */}
                            <div class="pull-right actions-group">

                                {/* <!-- MT BURGER --> */}
                                <div id="mt-nav-burger">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                                {/* <!-- SEARCH ICON --> */}
                                <a href="#" class="mt-search-icon">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </a>

                                <a class="profile modeltheme-trigger mt-login-icon" href="#" data-modal="modal-log-in">
                                    <i class="fa fa-user-plus" aria-hidden="true"></i>
                                </a>

                            </div>

                            {/* <!-- SOCIAL LINKS --> */}
                            <ul class="social-links">
                                <li><a href="http://telegram.org/"><i class="fa fa-telegram"></i></a></li>
                                <li><a href="http://facebook.com/"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="https://twitter.com/envato"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="http://plus.google.com/"><i class="fa fa-google-plus"></i></a></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </header>

        {/* <!-- HEADER TITLE BREADCRUBS SECTION --> */}

        {/* <!-- Page content --> */}
        <div class="no-padding content-area no-sidebar" role="main">
        	<div class="container-fluid">
        		<div class="row entry-content">
        			{/* <!-- Section1 - Cryptic countdown --> */}
        			<div class="clearfix"></div>
        			<div class="cryptic_countdown padding_80 data_background text-center" data-background={cryptic_theme}>
        				<div class="container">
        					<div class="row">
        						<div class="col-xs-12 col-sm-4 col-md-6 padding_80">
        							<h1 class="wow fadeInDown start_animation">
				                        <strong class="text-bold">Cryptic</strong> The <br /><strong>Revolution</strong> In<br />Virtual <strong>Coin</strong>
				                    </h1>
				                    <h3 class="wow fadeInDown start_animation">Buy now and get +40% extra bonus Minimum pre-sale amount 25 Cryptic Coin. We accept BTC crypto-currency.</h3>
				                    <div class="spacer_30"></div>
                                    <a class="btn" href="assets/images/Whitepaper.pdf" title="">WHITEPAPER</a>
                                </div>
                                <div class="col-xs-12 col-sm-8 col-md-6">
                                    <div class="flipclock-countdown">
                                        <p class="text-center"><span class="text-white">Distribution Ends In:</span></p>
                                            
                                        <div class="countdownv2_holder">
                                            <div class="countdownv2 clock" data-count-down="2018/10/25"></div>
                                        </div>
                                        <div class="clearfix"></div>
                                        <div class="spacer_70"></div>
                                        <div class="clearfix"></div>
                                        <div class="buy-coin text-center">
                                            <a href="#" title="">BUY TOKENS</a>
                                        </div>
                                        <div class="clearfix"></div>
                                        <div class="spacer_50"></div>
                                        <div class="clearfix"></div>
                                        <div class="softcap">
                                            <h6 class="text-left text-white">Softcap <span>in 976 days</span></h6>
                                        </div>

                                        <div class="progress_bar  special_progress wow fadeIn">
                                            <div class="general single_bar">
                                            	<small class="label">
                                            		<span>35$</span>
                                            	</small> 
                                            	<span class="special-progress-bar"></span>
                                            </div>
                                        </div>

                                        <h6 class="text-right"><span class="text-white">Hardcap</span></h6>
                                        <div class="spacer_30"></div>

                                        <p class="text-center"><span class="text-white">Total Tokens: <strong>8833.0122</strong></span></p>
                                        <p class="text-center"><span class="text-white">Tokens In Circulation: <strong>4103.3011</strong> </span></p>
                                        <p class="text-center"><span class="text-white">Token Price: <strong>$0.0023</strong></span></p>
                                    </div>
                                </div>
        					</div>
        				</div>
        			</div>
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
                    {/* <!-- Section5 - Cryptic Milestones --> */}
	                <div class="clearfix"></div>
                    <div class="cryptic_milestones padding_80 data_background" data-background={bitcurrency_members}>
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
                                                <h3 class="timeline_item_title">Cryptic ICO</h3>
                                                <p class="timeline_item_content">With a userbase of 200 members, we were only just setting up camp.</p><a href="#" class="cd-read-more">Read More</a>
                                                <p class="cd-date">2017 November 20th</p>
                                            </div>
                                            {/* <!-- cd-timeline-content --> */}
                                        </div>
                                        <div class="mt_shortcode_timeline_items cd-timeline-block">
                                            <div class="cd-timeline-img cd-picture"><img src={cryptic_icon} alt="cryptic-icon" /></div>
                                            {/* <!-- cd-timeline-img --> */}
                                            <div class="cd-timeline-content">
                                                <h3 class="timeline_item_title">CHP launch on Cryptic</h3>
                                                <p class="timeline_item_content">The release of our long-awaited token.</p><a href="#" class="cd-read-more">Read More</a>
                                                <p class="cd-date">2018 January 10th</p>
                                            </div>
                                            {/* <!-- cd-timeline-content --> */}
                                        </div>
                                        <div class="mt_shortcode_timeline_items cd-timeline-block">
                                            <div class="cd-timeline-img cd-picture"><img src={cryptic_icon} alt="cryptic-icon" /></div>
                                            {/* <!-- cd-timeline-img --> */}
                                            <div class="cd-timeline-content">
                                                <h3 class="timeline_item_title">Cryptic Listed in Exchanges</h3>
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
                                                <p class="timeline_item_content">You know the famed Steve Jobs saying ”There’s an app for that?”. Of course, there had to be an app for Cryptic as well.</p><a href="#" class="cd-read-more">Read More</a>
                                                <p class="cd-date">2018 March 14th</p>
                                            </div>
                                            {/* <!-- cd-timeline-content --> */}
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
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
	                                                <a href="https://www.cryptocompare.com/api/" style={{fontSize:"small"}}>Data by CryptoCompare API</a>
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
                    {/* <!-- Section7 - Cryptic News --> */}
	                <div class="clearfix"></div>
                    <div class="cryptic_news padding_80">
                    	<div class="container">
                    		<div class="row">
                                <div class="col-sm-12">
                                    <div class="title-subtile-holder wow  ">
                                        <h1 class="section-title dark_title">NEWS</h1>
                                        <div class="section-subtitle dark_subtitle">It’s an ever-changing business. To stay on top of the game, don’t forget to keep yourself in the know.</div>
                                    </div>
                                    <div class="spacer_80"></div>
                                    <div class="blog-posts simple-posts blog-posts-shortcode wow fadeIn">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <article class="single-post list-view  no-padding no-margin">
                                                    <div class="blog_custom">

                                                        {/* <!-- POST THUMBNAIL --> */}
                                                        <div class="col-md-12 post-thumbnail">
                                                            <a class="relative" href="#"><img class="blog_post_image" src={video_image} alt="What is Bitcoin Mining" /></a>
                                                            <span class="time-n-date">8 Jan</span>
                                                        </div>

                                                        {/* <!-- POST DETAILS --> */}
                                                        <div class="post-details col-md-12">

                                                            <div class="title-n-excerpt">
                                                                <h3 class="post-name row">
										                            <a href="#" title="What is Bitcoin Mining">What is Bitcoin Mining</a>
										                        </h3>
                                                                <div class="post-excerpt row">
                                                                    <p>Nemo enim ipsam voluptatem quia volup tas sit aspernatur aut odit aut fu sed quia conse quun tur magni dolor quia.</p>
                                                                </div>
                                                            </div>

                                                            <div class="text-element content-element">
                                                                <p class="author">Post by <a href="#">Robert Downey</a></p>
                                                                <p class="comments">Comments <a href="#">1</a></p>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </article>
                                            </div>
                                            <div class="col-sm-4">
                                                <article class="single-post list-view  no-padding no-margin">
                                                    <div class="blog_custom">

                                                        {/* <!-- POST THUMBNAIL --> */}
                                                        <div class="col-md-12 post-thumbnail">
                                                            <a class="relative" href="#"><img class="blog_post_image" src={crytic_wp_theme3} alt="Bitcoin vs Ethereum" /></a>
                                                            <span class="time-n-date">8 Jan</span>
                                                        </div>

                                                        {/* <!-- POST DETAILS --> */}
                                                        <div class="post-details col-md-12">

                                                            <div class="title-n-excerpt">
                                                                <h3 class="post-name row">
									                                <a href="#" title="Bitcoin vs Ethereum">Bitcoin vs Ethereum</a>
									                            </h3>
                                                                <div class="post-excerpt row">
                                                                    <p>Nemo enim ipsam voluptatem quia volup tas sit aspernatur aut odit aut fu sed quia conse quun tur magni dolor quia.</p>
                                                                </div>
                                                            </div>

                                                            <div class="text-element content-element">
                                                                <p class="author">Post by <a href="#">Robert Downey</a></p>
                                                                <p class="comments">No comments</p>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </article>
                                            </div>
                                            <div class="col-sm-4">
                                                <article class="single-post list-view  no-padding no-margin">
                                                    <div class="blog_custom">

                                                        {/* <!-- POST THUMBNAIL --> */}
                                                        <div class="col-md-12 post-thumbnail">
                                                            <a class="relative" href="#"><img class="blog_post_image" src={bitcurrency_theme} alt="The Government versus Bitcoin" /></a>
                                                            <span class="time-n-date">18 Dec</span>
                                                        </div>

                                                        {/* <!-- POST DETAILS --> */}
                                                        <div class="post-details col-md-12">

                                                            <div class="title-n-excerpt">
                                                                <h3 class="post-name row">
									                              	<a href="#" title="The Government versus Bitcoin">The Government versus Bitcoin</a>
									                            </h3>
                                                                <div class="post-excerpt row">
                                                                    <p>Nemo enim ipsam voluptatem quia volup tas sit aspernatur aut odit aut fu sed quia conse quun tur magni dolor quia.</p>
                                                                </div>
                                                            </div>

                                                            <div class="text-element content-element">
                                                                <p class="author">Post by <a href="#">Robert Downey</a></p>
                                                                <p class="comments">No comments</p>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                                <label style={{display: "none !important"}}>Leave this field empty if you're human:
                                                    <input type="text" name="_mc4wp_honeypot" value="" tabindex="-1" autocomplete="off"/>
                                                </label>
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
                    {/* <!-- Section9 - Cryptic OUR TEAM --> */}
	                <div class="clearfix"></div>
	                <div class="cryptic_our_team padding_80 data_background" data-background="assets/images/bitcurrency-members.jpg">
	                	<div class="container">
	                		<div class="row">
                                <div class="col-sm-12">
                                    <div class="title-subtile-holder wow  ">
                                        <h1 class="section-title dark_title no-margin">OUR TEAM</h1>
                                        <div class="section-subtitle dark_subtitle">
                                        	Our youth is only an indication of our drive. Here you have a team of experts, ready to offer consultancy when needed. 
                                        </div>
                                    </div>
                                    <div class="spacer_80"></div>
                                    <div class="row wow fadeIn">
                                        <div class="col-md-4 relative">
                                            <div class="row">
                                                <div class="col-md-12 col-sm-12 col-xs-12">
                                                    <div class="members_img_holder">
                                                        <div class="memeber01-img-holder">
                                                        	<img src={bitcurrency_member1} alt="John Doe" />
                                                        </div>
                                                        <div class="member01-content">
                                                            <div class="member01-content-inside">
                                                                <h3 class="member01_name">John Doe</h3>
                                                                <h5 class="member01_position">Assistant Manager</h5>
                                								<div class="content-div-content">
                                									<p>Nemo enim ipsam voluptates consequr dolor amet quia aut fu magni dolor.</p>
																</div>
                                								<div class="member01_social">
                                									<a target="_blank" href="https://www.facebook.com/modeltheme/" class="member01_profile-facebook"> 
                                										<i class="fa fa-facebook" aria-hidden="true"></i>
                                									</a> 
                                									<a target="_blank" href="https://twitter.com/envato" class="member01_profile-twitter"> 
                                										<i class="fa fa-twitter" aria-hidden="true"></i>
                                									</a> 
                                									<a target="_blank" href="https://www.linkedin.com/" class="member01_profile-linkedin"> 
                                										<i class="fa fa-linkedin" aria-hidden="true"></i> 
                                									</a> 
                                									<a target="_blank" href="https://vimeo.com/" class="member01_vimeo_url"> 
                                										<i class="fa fa-vimeo" aria-hidden="true"></i> 
                                									</a> 
                                								</div>
					                                        </div>
					                                    </div>
					                                </div>
					                            </div>
					                        </div>
					                    </div>

					                    <div class="col-md-4 relative">
					                        <div class="row">
					                            <div class="col-md-12 col-sm-12 col-xs-12">
					                                <div class="members_img_holder">
					                                    <div class="memeber01-img-holder"><img src={bitcurrency_member2} alt="Robert Downey" /></div>
					                                    <div class="member01-content">
					                                        <div class="member01-content-inside">
					                                            <h3 class="member01_name">Robert Downey</h3>
					                                            <h5 class="member01_position">General Director</h5>
					                                            <div class="content-div-content"><p>Nemo enim ipsam voluptates consequr dolor amet quia aut fu magni dolor.</p></div>
					                                            <div class="member01_social"><a target="_blank" href="https://www.facebook.com/modeltheme/" class="member01_profile-facebook"> <i class="fa fa-facebook" aria-hidden="true"></i></a> <a target="_blank" href="https://twitter.com/envato" class="member01_profile-twitter"> <i class="fa fa-twitter" aria-hidden="true"></i></a> <a target="_blank" href="https://www.linkedin.com/" class="member01_profile-linkedin"> <i class="fa fa-linkedin" aria-hidden="true"></i> </a> <a target="_blank" href="https://vimeo.com/" class="member01_vimeo_url"> <i class="fa fa-vimeo" aria-hidden="true"></i> </a> </div>
					                                        </div>
					                                    </div>
					                                </div>
					                            </div>
					                        </div>
					                    </div>

					                    <div class="col-md-4 relative">
					                        <div class="row">
					                            <div class="col-md-12 col-sm-12 col-xs-12">
					                                <div class="members_img_holder">
					                                    <div class="memeber01-img-holder"><img src={bitcurrency_member3} alt="Thomas Moriz" /></div>
					                                    <div class="member01-content">
					                                        <div class="member01-content-inside">
					                                            <h3 class="member01_name">Thomas Moriz</h3>
					                                            <h5 class="member01_position">Regional Manager</h5>
					                                            <div class="content-div-content"><p>Nemo enim ipsam voluptates consequr dolor amet quia aut fu magni dolor.</p></div>
					                                            <div class="member01_social"><a target="_blank" href="https://www.facebook.com/modeltheme/" class="member01_profile-facebook"> <i class="fa fa-facebook" aria-hidden="true"></i></a> <a target="_blank" href="https://twitter.com/envato" class="member01_profile-twitter"> <i class="fa fa-twitter" aria-hidden="true"></i></a> <a target="_blank" href="https://www.linkedin.com/" class="member01_profile-linkedin"> <i class="fa fa-linkedin" aria-hidden="true"></i> </a> <a target="_blank" href="https://vimeo.com/" class="member01_vimeo_url"> <i class="fa fa-vimeo" aria-hidden="true"></i> </a> </div>
					                                        </div>
					                                    </div>
					                                </div>
					                            </div>
					                        </div>
					                    </div>
    								</div>
    							</div>
    						</div>
    					</div>
    				</div>
        		
                </div>
        	</div>
	    </div>
        
	    <div class="btn-sticky-left">
            <a href="https://themeforest.net/item/cryptic-cryptocurrency-ico-landing-page-html-template/21844047?s_rank=3" target="_blank" title="Purchase Cryptic"><i class="icon-basket-loaded icons"></i></a>
            <a href="https://docs.modeltheme.com/cryptic-html/" target="_blank" title="Theme Docs"><i class="icon-book-open icons"></i></a>
            <a href="https://goo.gl/4FxQ51" target="_blank" title="Submit Support Ticket"><i class="icon-support icons"></i></a>
            {/* <!-- WP Variant --> */}
            <a target="_blank" href="https://themeforest.net/item/cryptic-cryptocurrency-wordpress-theme/20960008" title="WordPress Variant Available">
                <i class="fa fa-wordpress" aria-hidden="true"></i>
            </a>
        </div>

	    {/* <!-- BEGIN: FLOATING SOCIAL BUTTON --> */}
	    <a data-toggle="tooltip" data-placement="top" title="Connect on Telegram" class="floating-social-btn" target="_blank" href="http://telegram.org/">
	    	<i class="fa fa-telegram"></i>
	    </a>    
        {/* <!-- END: FLOATING SOCIAL BUTTON --> */}

	    {/* <!-- BACK TO TOP BUTTON --> */}
        <a class="back-to-top modeltheme-is-visible modeltheme-fade-out" href="#">
            <i class="fa fa-long-arrow-up" aria-hidden="true"></i>
        </a>

        {/* <!-- TICKERS DARK --> */}
        <div class="tickers-black-sm crypto-ticker">
            <ul id="webticker-dark-icons">
                <li data-update="item1"><i class="cc BTC"></i> BTC <span class="coin-value"> $11.039232</span></li> 
                <li data-update="item2"><i class="cc ETH"></i> ETH <span class="coin-value"> $1.2792</span></li> 
                <li data-update="item3"><i class="cc GAME"></i> GAME <span class="coin-value"> $11.039232</span></li> 
                <li data-update="item4"><i class="cc LBC"></i> LBC <span class="coin-value"> $0.588418</span></li> 
                <li data-update="item5"><i class="cc NEO"></i> NEO <span class="coin-value"> $161.511</span></li> 
                <li data-update="item6"><i class="cc STEEM"></i> STE <span class="coin-value"> $0.551955</span></li> 
                <li data-update="item7"><i class="cc LTC"></i> LIT <span class="coin-value"> $177.80</span></li> 
                <li data-update="item8"><i class="cc NOTE"></i> NOTE <span class="coin-value"> $13.399</span></li>
                <li data-update="item9"><i class="cc MINT"></i> MINT <span class="coin-value"> $0.880694</span></li> 
                <li data-update="item10"><i class="cc IOTA"></i> IOT <span class="coin-value"> $2.555</span></li> 
                <li data-update="item11"><i class="cc DASH"></i> DAS <span class="coin-value"> $769.22</span></li>   
            </ul>
        </div>

	    {/* <!-- FOOTER --> */}
	    <footer class="data_background" data-background={footer}>
	        {/* <!-- FOOTER TOP --> */}
	        <div class="row footer-top">
			    <div class="container">
			        <div class="row">
			            <div class="col-md-12 footer-row-1">
			                <div class="row">
			                    <div class="col-md-3 sidebar-1">
			                        <aside class="widget vc_column_vc_container widget_nav_menu">
			                            <h1 class="widget-title">RESOURCES</h1>
			                            <div class="menu-footer1-container">
			                                <ul class="menu">
			                                    <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#">How to Buy Coin</a></li>
			                                    <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#">Coin Overview</a></li>
			                                    <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="blog.html">Blog News</a></li>
			                                    <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#">How to Sell Coin</a></li>
			                                    <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#">Purchase Template</a></li>
			                                </ul>
			                            </div>
			                        </aside>
			                    </div>
			                    <div class="col-md-3 sidebar-2">
			                        <aside class="widget vc_column_vc_container widget_nav_menu">
			                            <h1 class="widget-title">NETWORK</h1>
			                            <div class="menu-footer2-container">
			                                <ul class="menu">
			                                    <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#">Network Stats</a></li>
			                                    <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#">Block Explorers</a></li>
			                                    <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#">Governance</a></li>
			                                    <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#">Exchange  Markets</a></li>
			                                    <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#">Get Template</a></li>
			                                </ul>
			                            </div>
			                        </aside>
			                    </div>
			                    <div class="col-md-3 sidebar-3">
			                        <aside class="widget vc_column_vc_container widget_nav_menu">
			                            <h1 class="widget-title">SUPPORT</h1>
			                            <div class="menu-footer3-container">
			                                <ul class="menu">
			                                    <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#">Contact Us</a></li>
			                                    <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#">Developer Center</a></li>
			                                    <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#">Helpes</a></li>
			                                    <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#">Terms &#038; Conditions</a></li>
			                                    <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#">Purchase Template</a></li>
			                                </ul>
			                            </div>
			                        </aside>
			                    </div>
			                    <div class="col-md-3 sidebar-4">
			                        <aside class="widget vc_column_vc_container widget_nav_menu">
			                            <h1 class="widget-title">ABOUT US</h1>
			                            <div class="menu-footer4-container">
			                                <ul class="menu">
			                                    <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#">Our Coin</a></li>
			                                    <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#">Carrers</a></li>
			                                    <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#">Our Team</a></li>
			                                    <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#">Our Project</a></li>
			                                    <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#">Purchase</a></li>
			                                </ul>
			                            </div>
			                        </aside>
			                    </div>
			                </div>
			            </div>
			        </div>
			        <div class="row">
			            <div class="col-md-12 footer-row-2">
			                <div class="row"></div>
			            </div>
			        </div>
			        <div class="row">
			            <div class="col-md-12 footer-row-3">
			                <div class="row"></div>
			            </div>
			        </div>
			    </div>
			</div>

	        {/* <!-- FOOTER BOTTOM --> */}
	        <div class="footer-div-parent">
	            <div class="container-fluid footer">
	                <div class="col-md-12">
	                	<p class="copyright text-center">
	                        <a href="#">Cryptocurrency Template</a> by ModelTheme. 2018 All Rights Reserved.</p>
	                </div>
	            </div>
	        </div>
	    </footer>
        <div class="spacer_40"></div>
	</div>
            </div>
         );
    }
}
 
export default Home;