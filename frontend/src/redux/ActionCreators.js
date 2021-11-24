import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchParks = () => (dispatch) => {
    dispatch(parksLoading(true));

    return fetch(baseUrl + 'parks')
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
        .then(parks => dispatch(addParks(parks)))
        .catch(error => dispatch(parksFailed(error.message)));
}

export const parksLoading = () => ({
    type: ActionTypes.PARKS_LOADING
});

export const parksFailed = (errmess) => ({
    type: ActionTypes.PARKS_FAILED,
    payload: errmess
});

export const addParks = (parks) => ({
    type: ActionTypes.ADD_PARKS,
    payload: parks
});

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
            credentials: "same-origin"
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
        .then(response => {
            alert('Đăng ký thành công'); 
            window.location.href='/'
        })
        .then(user => dispatch(addUser(user)))
        .catch(error =>  { console.log('post user', error.message); alert('Your account could not be posted\nError: '+error.message); });
    }

export const userFailed = (errmess) => ({
    type: ActionTypes.USER_FAILED,
    payload: errmess
});

export const addUser = (user) => ({
    type: ActionTypes.ADD_USER,
    payload: user
});

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
            credentials: "same-origin"
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
        .then(response => {
            alert('Đăng nhập thành công'); 
            window.location.href='/'
        })
        .then(user => dispatch(addUser(user)))
        .catch(error =>  { console.log('post user', error.message); alert('Your account could not be posted\nError: '+error.message); });
    }
