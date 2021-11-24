import React, { Component } from "react";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import SearchInfo from './SearchInfoComponent';
import { connect } from "react-redux";
import ParkListTabs from "./ParkListComponent";
import { fetchParks, postUser, postLogin } from "../redux/ActionCreators";
import Start from "./StartComponent"
import { Routes, Route } from 'react-router-dom'
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
        //this.props.fetchParks();
        //this.props.postUser();
    }

    render() {
        return (
            <div>
                <Header />
                {/* <SearchInfo />
                <ParkListTabs parks={this.props.parks} /> */}
                <Routes>
                    <Route path="/login" element={ <Login postLogin = {this.props.postLogin}/>} />
                    <Route path="/register" element= { <Register postUser = {this.props.postUser}/> } />
                    
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);