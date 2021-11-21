import React, { Component } from "react";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import SearchInfo from './SearchInfoComponent';
import { connect } from "react-redux";
import ParkListTabs from "./ParkListComponent";
import { fetchParks } from "../redux/ActionCreators";
import Start from "./StartComponent"

const mapStateToProps = state => {
    return {
        parks: state.parks,
    }
}

const mapDispatchToProps = dispatch => ({
    fetchParks: () => {dispatch(fetchParks())}
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
                <ParkListTabs parks={this.props.parks} />
                <Footer />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);