import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import {
    NavItem, NavbarToggler, Nav, Collapse, Navbar,
    NavbarBrand, Button
} from "reactstrap";
import { Logout } from "../redux/AuthenActionCreators";

const mapDispatchToProps = dispatch => ({
    Logout: () => dispatch(Logout())
});

function Info(props) {
    const [login, setLogin] = React.useState(true);

    React.useEffect(() => {
        setLogin(sessionStorage.getItem('login') || false)
        function listenStorage() {
            setLogin(sessionStorage.getItem('login') || false);
        };
        window.addEventListener('storagechange', listenStorage);
    }, []);


    return (
        <NavItem>
            {!login &&
                <Link to='/login'>
                    <Button outline >
                        <span className="fa fa-sign-in fa-lg"></span> Đăng nhập
                    </Button>
                </Link>
            }
            {login && sessionStorage.getItem('role') == 'user' &&
                <Link to='/account/info'>
                    <Button outline>
                        <span className="fa fa-sign-in fa-lg"></span> Tài khoản
                    </Button>
                </Link>
            }
            {login && sessionStorage.getItem('role') == 'owner' &&
                <Link to='/account/info'>
                    <Button outline>
                        <span className="fa fa-sign-in fa-lg"></span> Tài khoản
                    </Button>
                </Link>
            }
            {login && sessionStorage.getItem('role') == 'admin' &&
                <Link to='/admin/dashboard'>
                    <Button outline>
                        <span className="fa fa-sign-in fa-lg"></span> Quản lý
                    </Button>
                </Link>
            }
        </NavItem>
    )
}

Info = connect(null, mapDispatchToProps)(Info);

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
                <Navbar expand="lg" style={{ backgroundColor: '#CEE5D0' }}>
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="app-name ms-auto" href="/">Park Type</NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="ms-auto" navbar>
                            <NavItem>
                                <NavLink style={{ color: '#3E7C17' }} className="nav-link" to="/">
                                    <strong>Tìm bãi đỗ</strong>
                                </NavLink>
                            </NavItem>
                            {sessionStorage.getItem('role') == 'owner' &&
                            <NavItem>
                                <NavLink style={{ color: '#3E7C17' }} className="nav-link" to="/">
                                    <strong>Quản lý bãi đỗ</strong>
                                </NavLink>
                            </NavItem>
                            }
                            <NavItem>
                                <NavLink style={{ color: '#3E7C17' }} className="nav-link" to="/">
                                    <strong>Nav Example</strong>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{ color: '#3E7C17' }} className="nav-link" to="/">
                                    <strong>Nav Example</strong>
                                </NavLink>
                            </NavItem>

                            <Info />

                        </Nav>
                    </Collapse>
                </Navbar>
            </>
        );
    }

}

export default Header;