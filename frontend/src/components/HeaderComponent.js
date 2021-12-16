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
        setLogin(localStorage.getItem('login') || false)
        function listenStorage() {
            setLogin(localStorage.getItem('login') || false);
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
            {login && localStorage.getItem('role') == 'user' &&
                <Link to='/account/info'>
                    <Button outline>
                        <span className="fas fa-user fa-lg"></span> Tài khoản
                    </Button>
                </Link>
            }
            {login && localStorage.getItem('role') == 'owner' &&
                <Link to='/account/info'>
                    <Button outline>
                        <span className="fas fa-user fa-lg"></span> Tài khoản
                    </Button>
                </Link>
            }
            {login && localStorage.getItem('role') == 'admin' &&
                <Link to='/admin/dashboard'>
                    <Button outline>
                        <span className="fas fa-user-cog fa-lg"></span> Quản lý
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
                    <NavbarBrand className="app-name ms-auto">Park Type</NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="ms-auto" navbar>
                            <NavItem className="nav-header">
                                <NavLink className="nav-link" to="/">
                                    <strong>Tìm bãi đỗ</strong>
                                </NavLink>
                            </NavItem>
                            <NavItem className="nav-header">
                                <NavLink className="nav-link" to="/owner/myparks">
                                    <strong>Quản lý bãi đỗ</strong>
                                </NavLink>
                            </NavItem>
                            <NavItem className="nav-header">
                                <NavLink className="nav-link" to="/">
                                    <strong>Về chúng tôi</strong>
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