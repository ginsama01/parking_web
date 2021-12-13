import * as ActionTypes from './ActionTypes';
import { baseUrl } from "../shared/baseUrl";

//Sign up
export const postUser = (username, password, email, firstname, lastname, type) => (dispatch) => {
    const newUser = {
        username: username,
        password: password,
        email: email,
        firstname: firstname,
        lastname: lastname,
        type: type
    };
    return fetch(baseUrl + 'authen/signup',
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
            credentials: "include"
        })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                throw response;
            }
        })
        .then(response => response.json())
        .then(result => {
            if (result.success === true) {
                alert('Vui lòng vào email để xác thực tài khoản!');
            }
        })
        .catch(error => {
            error.json().then(body => {
                alert(body.message);
            })
        });
}

export const userFailed = (errmess) => ({
    type: ActionTypes.USER_FAILED,
    payload: errmess
});

export const addUser = (user) => ({
    type: ActionTypes.ADD_USER,
    payload: user
});

//Verify
export const getVerify = (code) => (dispatch) => {
    return fetch(baseUrl + 'authen/verify?code=' + code, {credentials: 'include'})
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                throw response;
            }
        })
        .then(response => response.json())
        .then(result => {
            if (result.success == true) {
                alert('Xác thực thành công!');
                return result;
            }
        })
        .catch(error => {
            error.json().then(body=> {
                alert(body.message);
            })
        })
}

// Forgotten
export const sendCode = (username) => (dispatch) => {
    const getCode = {
        username: username,
    }
    return fetch(baseUrl + 'authen/forgotten',
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(getCode),
            credentials: "include"
        })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                throw response;
            }
        })
        .then(response => response.json())
        .then(result => {
            alert("Vui lòng vào email để lấy mã xác thực!");
            return result;
        })
        .catch(error => {
            error.json().then(body => {
                alert(body.message);
            })
        });
}

export const postForgotten = (username, code) => (dispatch) => {
    const Forgotten = {
        username: username,
        code: code
    }
    return fetch(baseUrl + 'authen/forgotten/code',
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Forgotten),
            credentials: "include"
        })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                throw response;
            }
        })
        .then(response => response.json())
        .then(result => {
            return result;
        })
        .catch(error => {
            error.json().then(body => {
                alert(body.message);
            })
        });
}

export const postNewPassword = (username, password) => (dispatch) => {
    const NewPassword = {
        username: username,
        password: password
    }
    return fetch(baseUrl + 'authen/forgotten/password',
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(NewPassword),
            credentials: "include"
        })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                throw response;
            }
        })
        .then(response => response.json())
        .then(result => {
            alert('Thay đổi mật khẩu thành công!');
        })
        .catch(error => {
            error.json().then(body => {
                alert(body.message);
            })
        });
}

// Login 
export const postLogin = (username, password) => (dispatch) => {
    const Login = {
        username: username,
        password: password
    };
    return fetch(baseUrl + 'authen/login',
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Login),
            credentials: "include"
        })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                throw response;
            }
        })
        .then(response => response.json())
        .then(user => {
            sessionStorage.setItem('login', true);
            sessionStorage.setItem('username', user['username']);
            sessionStorage.setItem('role', user['role']);
            const event = new Event('storagechange');
            window.dispatchEvent(event);
            alert('Đăng nhập thành công');
            return user;
        })
        .catch(error => {
            error.json().then(body => {
                alert(body.message);
                return body.message;
            })
        });
}


export const Logout = () => (dispatch) => {
    return fetch(baseUrl + 'authen/logout',
        {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"
        })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(user => {
            sessionStorage.removeItem('login');
            sessionStorage.removeItem('username');
            sessionStorage.removeItem('role');
            const event = new Event('storagechange');
            window.dispatchEvent(event);
        })
        .catch(error => { console.log('post user', error.message); alert('Your account could not be posted\nError: ' + error.message); });
}