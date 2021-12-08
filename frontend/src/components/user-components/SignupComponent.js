import React, { Component } from 'react';
import { Button, Label, Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { postUser } from "../../redux/UserActionCreators";
import { connect } from "react-redux";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const validUsername = (val) => /^[a-zA-Z][a-zA-Z0-9]+$/.test(val);
const validPasword = (val) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{0,}$/.test(val);

const mapDispatchToProps = dispatch => ({
    postUser: (username, password, email, firstname, lastname, type) => dispatch(postUser(username, password, email, firstname, lastname, type))
});

class Register extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(values) {
        this.props.postUser(values.username, values.password, values.email, values.firstname, values.lastname, values.type)
    }
    render() {
        return (
            <div className="container">
                <div className="row row-content">
                    <div className="col-12 col-md-8 offset-2">
                      <h3>Đăng ký </h3>
                      <p>Chào mừng đến với ParkType! Tạo tài khoản của riêng bạn!</p>
                    </div>
                    <div className="col-12 col-md-8 offset-2">
                        <LocalForm model="signup" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="username" md={2}>Username</Label>
                                <Col md={10}>
                                    <Control.text model=".username" id="username" name="username"
                                        placeholder="Username"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(5), maxLength: maxLength(30), validUsername
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".username"
                                        show="touched"
                                        messages={{
                                            required: 'Bắt buộc',
                                            minLength: 'Tối thiểu 5 ký tự',
                                            maxLength: 'Tối đa 30 ký tự',
                                            validUsername: 'Tài khoản chỉ chứa chữ cái và số, được bắt đầu bằng chữ cái'
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
                                            required, minLength: minLength(8), maxLength: maxLength(50), validPasword
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".password"
                                        show="touched"
                                        messages={{
                                            required: 'Bắt buộc',
                                            minLength: 'Tối thiểu 8 ký tự',
                                            maxLength: 'Tối đa 50 ký tự',
                                            validPasword: 'Mật khẩu chứa ít nhất 1 chữ viết hoa, 1 chữ viết thường và 1 chữ số'
                                        }}
                                     />
                                </Col>
                            </Row>
                            
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(1), maxLength: maxLength(30)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Bắt buộc',
                                            minLength: 'Tối thiểu 1 ký tự',
                                            maxLength: 'Tối đa 30 ký tự',
                                        }}
                                     />
                                </Col>
                            </Row>
                            
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(1), maxLength: maxLength(30)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: 'Bắt buộc',
                                            minLength: 'Tối thiểu 1 ký tự',
                                            maxLength: 'Tối đa 30 ký tự',
                                        }}
                                     />
                                </Col>
                            </Row>
                            
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }} />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Địa chỉ email không đúng'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                    <Label htmlFor="type" md={2}>Chọn loại tài khoản</Label>
                                    <Col md={3}>
                                        <Control.select model=".type" name="type"   
                                            className="form-control" defaultValue="user" 
                                            validators={{
                                                required
                                            }}>
                                            <option value="user">Người dùng</option>
                                            <option value="owner">Chủ bãi đỗ</option>
                                        </Control.select>
                                    </Col>
                                
                            </Row>
                            
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Signup
                                    </Button>
                                </Col>
                            </Row> 
                        </LocalForm>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(Register);