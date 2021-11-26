import React, { Component } from "react";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import SearchInfo from './SearchInfoComponent';
import { connect } from "react-redux";
import ParkListTabs from "./ParkListComponent";
import { fetchComments, fetchParkInfo, fetchParks, fetchParkStatus, postUser, postLogin } from "../redux/ActionCreators";
import Start from "./StartComponent"
import ParkDetail from "./ParkDetailComponent";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Login from "./LoginComponent";
import Register from "./SignupComponent";

const mapStateToProps = state => {
    return {
        parks: state.parks,
        
    }
}

const mapDispatchToProps = dispatch => ({
    fetchParks: () => {dispatch(fetchParks())},
    postLogin: (username, password) => dispatch(postLogin(username, password)),
    postUser: (username, password, email, firstname, lastname, type) => dispatch(postUser(username, password, email, firstname, lastname, type))
});


class Main extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchParks();
    }


    render() {
        return (
            <div>
                <Header />
                <SearchInfo />
                <Switch>
                    <Route exact path="/start" component={() => <Start />} />
                    {/* <Route exact path="/parks" 
                        component={() => <ParkDetail park_status={this.props.park_status}
                            park_info={this.props.park_info}
                            comments={this.props.comments} />} /> */}
                    <Route exact path="/parks" 
                        component={ () => <ParkListTabs parks={this.props.parks} /> } />
                    <Route exact path="/login" component={() => <Login postLogin = {this.props.postLogin}/>} />
                    <Route exact path="/register" component= {() => <Register postUser = {this.props.postUser}/> } />
                    <Redirect to="/start" />
                </Switch>
                {/* <SearchInfo />
                <ParkListTabs parks={this.props.parks} /> */}
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));