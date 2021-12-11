import React, { Component, lazy } from "react";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import ParkListTabs from "./ParkListComponent";
import Start from "./StartComponent"
import SearchInfo from './SearchInfoComponent';
import { postUser, postLogin } from "../redux/ActionCreators";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Login from "./LoginComponent";
import Register from "./SignupComponent";
import ChangeInfo from "./NavSideBar/ChangeInfo";
import Sidebar  from "./NavSideBar/Sidebar"
import Home from "./NavSideBar/Home";
import Layout from "./NavSideBar/LayOut";
import Routes from "./NavSideBar/Routes";

const mapDispatchToProps = dispatch => ({
    postLogin: (username, password) => dispatch(postLogin(username, password)),
    postUser: (username, password, email, firstname, lastname, type) => dispatch(postUser(username, password, email, firstname, lastname, type))
});

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
                    <Route exact path="/home" component={() => <Home />} />
                    <Route exact path="/parks" 
                        component={ () => <ParkListTabs /> } />
                    <Route exact path="/login" component={() => <Login />} />
                    <Route exact path="/register" component= {() => <Register /> } />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}


export default withRouter(Main);