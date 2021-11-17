import React, { Component } from "react";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Form from "./Form";
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Form />
                <Footer />
            </div>
        );
    }
}

export default Main;