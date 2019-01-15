import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Redirect} from 'react-router-dom';
import * as Screens from '../Screens';
import Navbar from '../Navbar/Navbar';


const Routes = () => (
    <Router>
        <div>
            {/* <Navbar /> */}
            <Route exact path="/" component={Screens.Home} />
            <Route exact path="/homeChk" component={Screens.HomeChk} />
        </div>
    </Router>
);

export default Routes;