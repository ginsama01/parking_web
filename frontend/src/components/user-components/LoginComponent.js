import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Label, Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { postLogin } from "../../redux/UserActionCreators";
import { connect } from "react-redux";
import { fetchInfoUser} from "../../redux/AccountActionCreators";
import { withRouter } from 'react-router-dom'

const required = (val) => val && val.length;

const mapDispatchToProps = dispatch => ({
    postLogin: (username, password) => dispatch(postLogin(username, password)),
    fetchInfoUser: () => dispatch(fetchInfoUser())
});

class Login extends Component {
    constructor(props) {
        super(props);
    }

    async handleSubmit(values) {
        var result = await this.props.postLogin(values.username, values.password);
        if (result) {
            await this.props.fetchInfoUser();
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row row-content">
                    <div className="col-12 col-md-8 offset-2">
                      <h3>Đăng nhập tài khoản</h3>
                      <p>Chào mừng đến với ParkType! Đăng nhập vào tài khoản của bạn!</p>
                    </div>
                    <div className="col-12 col-md-8 offset-2">
                        <LocalForm model="login" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="username" md={2}>Username</Label>
                                <Col md={10}>
                                    <Control.text model=".username" id="username" name="username"
                                        placeholder="Username"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                        />
                                    <Errors
                                        className="text-danger"
                                        model=".username"
                                        show="touched"
                                        messages={{
                                            required: 'Bắt buộc'
                                        }}
                                     />
                                </Col>
                            </Row>
                            
                            <Row className="form-group">
                                <Label htmlFor="password" md={2}>Password</Label>
                                <Col md={10}>
                                    <Control model=".password" id="password" name="password"
                                        type="password"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                        />
                                    <Errors
                                        className="text-danger"
                                        model=".password"
                                        show="touched"
                                        messages={{
                                            required: 'Bắt buộc'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <p>Quên mật khẩu?</p>
                            <Button type="submit" value="submit" color="primary">Đăng nhập</Button>
                            <p>Bạn chưa có tài khoản?</p>
                            <Link to="/user/register">
                                <Button>Đăng ký</Button>
                            </Link>
                        </LocalForm>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Login));