import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
    NavItem, NavbarToggler, Nav, Collapse, Navbar,
    NavbarBrand, Button
} from "reactstrap";


class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        }
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <>
                <Navbar expand="lg" color="light">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="app-name ms-auto" href="/">Park Type</NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="ms-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/">
                                    Nav Example
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/">
                                    Nav Example
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/">
                                    Nav Example
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/">
                                    Nav Example
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <Button outline>
                                    <span className="fa fa-sign-in fa-lg"></span> Đăng nhập
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </>
        );
    }

}

export default Header;