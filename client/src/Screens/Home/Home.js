import React, { Component } from 'react';
import Header from './Header/Header';
import FrontDisplayCont from './FrontDisplayCont/FrontDisplayCont';
import LivePriceTable from './LivePriceTable/LivePriceTable';
import UntilIcoClose from './UntilIcoClose/UntilIcoClose';
import RuningCounter from './RuningCounter/RuningCounter';
import Milestone from './Milestone/Milestone';
import Calculator from './Calculator/Calculator';
import News from './News/News';
import KnowYourCustomers from './KnowYourCustomers/KnowYourCustomers';
import OurTeam from './OurTeam/OurTeam';
import FooterTop from './FooterTop/FooterTop';
import FooterBottom from './FooterBottom/FooterBottom';
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
            <div id="page" class="hfeed site">
                <Header />
                <FrontDisplayCont />
                <LivePriceTable />
                <UntilIcoClose />
                <RuningCounter />
                <Milestone />
                <Calculator />
                <News />
                <KnowYourCustomers />
                <OurTeam />
                <footer class="data_background" data-background={footer}>
                <FooterTop />
                <FooterBottom />
                </footer>
            </div>
         );
    }
}
 
export default Home;