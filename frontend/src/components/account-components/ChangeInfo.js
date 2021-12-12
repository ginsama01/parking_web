import React, { Component } from 'react';
import { Button, FormGroup, Input, Label, Form, Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Layout from './LayOut';
import { fetchInfoUser, postChange, postDelete } from "../../redux/AccountActionCreators";
import { connect } from "react-redux";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const validUsername = (val) => /^[a-zA-Z][a-zA-Z0-9]+$/.test(val);
//const validPasword = (val) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]$/.test(val);
const validPasword = (val) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{0,}$/.test(val);

// const mapDispatchToProps = dispatch => ({
//     postUser: (username, password, email, firstname, lastname,address, type) => dispatch(postUser(username, password, email, firstname, lastname,address, type))
// });

const mapStateToProps = state => {
    return {
        info_user: state.info_user,
    }
}

const mapDispatchToProps = dispatch => ({
    fetchInfoUser: () => dispatch(fetchInfoUser()),
    postChange: (username, firstname, lastname, email, phone, address) => dispatch(postChange(username, firstname, lastname, email, phone, address)),
    postDelete: (username, email) => dispatch(postDelete(username, email))
});

function ChangeInfo(props){

    const [ignored, forceUpdate] = React.useReducer(x => x + 1, 0);

    React.useEffect(() => {
		props.fetchInfoUser();
	}, []);
    
    React.useEffect(() => {
        forceUpdate();
    }, [props.info_user])
    
    const [openModal, setOpenModal] = React.useState(false)
    const [changePass, setChangePass] = React.useState(false)

    

    const handleChangePass = e =>{
        e.preventDefault()
        setChangePass(true)
    }

    const closeChangePass = ()=>{
        setChangePass(false)
    }

    const onClickDelete = e =>{
        e.preventDefault()
        setOpenModal(true)
    }

    const onCloseModal = ()=>{
        setOpenModal(false)
    }

    const handleSubmit = async (values) => {
        console.log(values);
        console.log('---------') 
        var response = await props.postChange(values.username.value, values.firstname.value, values.lastname.value, values.email.value, values.phone.value, values.address.value)
        if (response) {
            props.fetchInfoUser();
          }
    }
    const handleDeleteUser = (values) => {
        props.postDelete(values.username, values.email)
    }

        return (
           <Row>
               <Col sm='3' xs='12'>
               <Layout></Layout>
               </Col>
               <Col>
               <div className="container" style={{backgroundColor: '#FFFFFF'}}>
                <div className="row row-content" style={{backgroundColor: '#F8F9FB', borderRadius: '20px'}}>
                    <div className="col-12 col-md-8 offset-2">
                      <h3 style={{color:"green", fontWeight:"bold"}}>Thông tin tài khoản</h3>
                      <p>Bạn có thể chỉnh sửa thông tin hồ sơ của mình bên dưới. Nhấp vào nút đặt lại mật khẩu sẽ gửi một liên kết đặt lại đến email của bạn.</p>
                    </div>
                    <div className="col-12 col-md-8 offset-2">
                        <LocalForm model="changeinfo" onSubmitFailed={handleSubmit} >
                            <Row className="form-group">
                                <Label htmlFor="username" md={3}>Tên người dùng</Label>
                                <Col >
                                    <Control.text model=".username" id="username" name="username"
                                        placeholder="Tên người dùng"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(5), maxLength: maxLength(30), validUsername
                                        }}
                                        disabled={true} defaultValue={props.info_user.info.username}
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
                                <Label htmlFor="firstname" md={3}>Họ</Label>
                                <Col >
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="Họ"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(1), maxLength: maxLength(30)
                                        }}
                                        defaultValue={props.info_user.info.firstname}
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
                                <Label htmlFor="lastname" md={3}>Tên</Label>
                                <Col >
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Tên"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(1), maxLength: maxLength(30)
                                        }}
                                        defaultValue={props.info_user.info.lastname}
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
                                <Label htmlFor="phone" md={3}>SĐT</Label>
                                <Col >
                                    <Control.text model=".phone" id="phone" name="phone"
                                        placeholder="SĐT"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(1), maxLength: maxLength(30)
                                        }}
                                        defaultValue={props.info_user.info.phone}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".phone"
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
                                <Label htmlFor="email" md={3}>Email</Label>
                                <Col >
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}
                                        defaultValue={props.info_user.info.email} 
                                        disabled={props.info_user.info.isActivated}/>
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
                                <Label htmlFor="address" md={3}>Địa chỉ</Label>
                                <Col >
                                    <Control.text model=".address" id="address" name="address"
                                        placeholder="Địa chỉ"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                        defaultValue={props.info_user.info.address}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".address"
                                        show="touched"
                                        messages={{
                                            required: 'Bắt buộc',
                                            
                                        }}
                                     />
                                </Col>
                            </Row>
                            
                            <Row className="form-group">
                                    <Label htmlFor="type" md={3}>Chọn loại tài khoản</Label>
                                    <Col md={3}>
                                        <Control.select model=".type" name="type"   
                                            className="form-control" defaultValue="user" 
                                            validators={{
                                                required
                                            }}
                                            defaultValue={props.info_user.info.type}
                                            disabled={true}
                                            >
                                            <option value="user">Người dùng</option>
                                            <option value="owner">Chủ bãi đỗ</option>
                                        </Control.select>
                                    </Col>
                                
                            </Row>
                            <br></br>
                            
                            <Row className="form-group">
                                <Label htmlFor="password" md={3}>Mật khẩu</Label>
                                <Col >
                                    {/* <Control model=".password" id="password" name="password"
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
                                     /> */}
                                    <Button style={{backgroundColor: 'white', color: 'green',border: '1px solid green'}} onClick={handleChangePass}  >
                                        Đặt lại mặt khẩu
                                    </Button>
                                    <Modal style={{display: 'block', marginLeft: '500px', border: "15px solid green"}} open={changePass} onClose={closeChangePass} >
                                        <h5 style={{color:"green", fontWeight:"bold", marginLeft:"30%" }}>Đặt lại mặt khẩu</h5>
                                        <Row>
                                            <Col md={5}><Label htmlFor="password">Mật khẩu hiện tại</Label></Col>
                                            <Col>
                                                <Control model=".password" id="password" name="password"
                                                    type="password"
                                                    className="form-control"
                                                    validators={{
                                                        required, minLength: minLength(8), maxLength: maxLength(50), validPasword
                                                    }}
                                            />
                                            </Col>
                                        </Row>
                                        <br></br>
                                        <Row>
                                            <Col md={5}><Label htmlFor="password" >Mật khẩu mới</Label></Col>
                                            <Col>
                                                <Control model=".password" id="password" name="password"
                                                    type="password"
                                                    className="form-control"
                                                    validators={{
                                                        required, minLength: minLength(8), maxLength: maxLength(50), validPasword
                                                    }}
                                            />
                                            </Col>
                                        </Row>
                                        <br></br>
                                        <Row>
                                            <Col md={5}><Label htmlFor="password">Nhắc lại mật khẩu</Label></Col>
                                            <Col>
                                                <Control model=".password" id="password" name="password"
                                                    type="password"
                                                    className="form-control"
                                                    validators={{
                                                        required, minLength: minLength(8), maxLength: maxLength(50), validPasword
                                                    }}
                                            />
                                            </Col>
                                        </Row>
                                        <Button color="success" style={{marginLeft:"50%"}}> Xác nhận </Button>
                                    </Modal>  
                                </Col>
                            </Row>

                            {props.info_user.info.isActivated == 1? 
                            (   <div>
                                    <br></br>
                                    <Row className="form-group" style={{backgroundColor: "#CEE5D0",borderRadius:"5px"}}>
                                        <Label style={{marginRight:"5%"}}><img src="https://img.icons8.com/color/48/000000/checked-2--v1.png"/>Tài khoản đã được xác minh!</Label>
                                    </Row> 
                                </div>
                            ) :
                            (
                                <Row className="form-group">
                                    <Label htmlFor="verification" md={3}>Xác minh tài khoản</Label>
                                    <Col >
                                        <Button style={{backgroundColor: 'white', color: 'green',border: '1px solid green'}}  onClick={handleChangePass}  >
                                            Xác minh tài khoản
                                        </Button>
                                    </Col>
                                </Row>
                            )}
                            
                            <Row className="form-group">
                                <Col >
                                    <Button style={{display:'block', margin: 'auto', width: '100%',border: '5px solid', borderRadius:'15px'}} type="submit" color="success" >
                                       Lưu thay đổi
                                    </Button> 
                                </Col>
                            </Row> 
                        </LocalForm>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div>
                    <Button style={{display:'block', margin: 'auto', width: '100%',border: '5px solid', borderRadius:'10px'}}  onClick={onClickDelete} outline  >
                        Xóa tài khoản
                    </Button>
                    <Modal style={{display: 'block', position: "absolute",top: "50%"}} open={openModal} onClose={onCloseModal}>
                        <h1>Bạn có chắc chắn ? </h1>
                        <Button  color="success" onClick={handleDeleteUser}> Yes </Button>
                        <Button color="success" onClick={onCloseModal}> No </Button>
                    </Modal>  
                </div>
                <br></br>
            </div>
               </Col>
           </Row>
        );
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeInfo);
