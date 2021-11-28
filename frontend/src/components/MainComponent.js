import React, { Component } from "react";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import ParkListTabs from "./ParkListComponent";
import Start from "./StartComponent"
import SearchInfo from './SearchInfoComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <SearchInfo />
                <Switch>
                    <Route exact path="/start" component={() => <Start />} />
                    <Route exact path="/parks" 
                        component={ () => <ParkListTabs /> } />
                    <Redirect to="/parks" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(Main);