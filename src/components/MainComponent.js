import React, { Component } from "react";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import SearchInfo from './SearchInfoComponent';
import { connect } from "react-redux";
import ParkListTabs from "./ParkListComponent";
import { fetchComments, fetchParkInfo, fetchParks, fetchParkStatus } from "../redux/ActionCreators";
import Start from "./StartComponent"
import ParkDetail from "./ParkDetailComponent";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

const mapStateToProps = state => {
    return {
        parks: state.parks,
        // park_status: state.park_status,
        // park_info: state.park_info,
        // comments: state.comments,
    }
}

const mapDispatchToProps = dispatch => ({
    fetchParks: () => { dispatch(fetchParks()) },
    // fetchParkStatus: (park_id) => { dispatch(fetchParkStatus(park_id)) },
    // fetchParkInfo: () => { dispatch(fetchParkInfo()) },
    // fetchComments: () => { dispatch(fetchComments()) }
});


class Main extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchParks();
        // this.props.fetchParkStatus();
        // this.props.fetchParkInfo();
        // this.props.fetchComments();
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
                    <Redirect to="/start" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));