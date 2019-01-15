import React, { Component } from 'react';
import './News.css';

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

class News extends Component {
    state = {}
    render() {
        return (
            <div>
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
                                       
               </div>
        );
    }
}

export default News;