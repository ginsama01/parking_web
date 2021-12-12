import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import MainAdmin from "./admin-components/MainAdminComponent";
import MainUser from "./user-components/MainUserComponent";
import CustomizedSnackbars from "./SnackBar";
import MainOwner from "./owner-components/MainOwnerComponent";

class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <CustomizedSnackbars />
                <Header />
                <Switch>
                    <Route path="/admin"><MainAdmin /></Route>
                    <Route path="/user"><MainUser /></Route>
                    <Route path="/owner"><MainOwner /></Route>
                    <Redirect to="/owner" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(Main);