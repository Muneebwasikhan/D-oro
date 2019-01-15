import React, { Component } from 'react';
import './Slider.css'

class Slider extends Component {
    state = {}
    render() {
        return (
            <div>

                <div className="container-flex slider-cont">
                    <div className="row">
                        <div className="col-6 border">
                            <div style={{ width: "100%" }} class="d-flex justify-content-end align-items-center ">
                                <div class="slider-text">
                                    <h1>SAVE FOR THE FUTURE
                            <br />
                                        <b>LIVE FOR TODAY </b>
                                    </h1>
                                    <p>Using technology to enable and empower savings anywhere in the world</p>
                                    <div className="slider-btn d-flex align-items-center justify-content-start ">
                                        <button>JOIN THE MAILING LIST</button>
                                        <button>JOIN THE MAILING LIST</button>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-6 border">
                            <div className="slider-grid2-box">
                            <div class="onboarding-preview-content">
                            <img src="https://www.gostackr.com/assets/images/hero/hero-screenshot.png" />
                            <p>Try out the onboarding tool to experiment with different capital and digital asset combinations.</p>
                            <button class=" secondary-button" href="#" target="_blank" data-gtm-event="true" data-gtm-action="link" data-gtm-label="Try onboarding tool" >Try onboarding tool</button>
                            </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slider;