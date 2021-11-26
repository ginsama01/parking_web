import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

//park-list
export const fetchParks = () => (dispatch) => {
    dispatch(parksLoading(true));

    return fetch(baseUrl + 'parks/best')
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


// park-status
export const fetchParkStatus = (park_id) => (dispatch) => {
    console.log(park_id)
    dispatch(parkStatusLoading(true));

    return fetch(baseUrl + 'parks/status/' + park_id)
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
        .then(park_status => dispatch(addParkStatus(park_status)))
        .catch(error => dispatch(parkStatusFailed(error.message)));
}

export const parkStatusLoading = () => ({
    type: ActionTypes.PARK_STATUS_LOADING
});

export const parkStatusFailed = (errmess) => ({
    type: ActionTypes.PARK_STATUS_FAILED,
    payload: errmess
});

export const addParkStatus = (park_status) => ({
    type: ActionTypes.ADD_PARK_STATUS,
    payload: park_status
});


//park-info
export const fetchParkInfo = () => (dispatch) => {
    dispatch(parkInfoLoading(true));

    return fetch(baseUrl + 'parkinfo')
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
        .then(park_info => dispatch(addParkInfo(park_info)))
        .catch(error => dispatch(parkInfoFailed(error.message)));
}

export const parkInfoLoading = () => ({
    type: ActionTypes.PARK_INFO_LOADING
});

export const parkInfoFailed = (errmess) => ({
    type: ActionTypes.PARK_INFO_FAILED,
    payload: errmess
});

export const addParkInfo = (park_info) => ({
    type: ActionTypes.ADD_PARK_INFO,
    payload: park_info
});


//get comments
export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
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
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
}

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});


//post comment
export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (park_id, rating, content) => (dispatch) => {

    const newComment = {
        park_id: park_id,
        rating: rating,
        content: content
    }
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
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
        .then(response => dispatch(addComment(response)))
        .catch(error => { console.log('Post comments ', error.message)
            alert('Your comment could not be posted \nError: ' + error.message) })
}


//post report
export const postReport = (park_id, content) => (dispatch) => {

    const newReport = {
        park_id: park_id,
        content: content
    }
    newReport.date = new Date().toISOString();

    return fetch(baseUrl + 'report', {
        method: 'POST',
        body: JSON.stringify(newReport),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
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
        // .then(response => dispatch(addComment(response)))
        .catch(error => { console.log('Post report ', error.message)
            alert('Your report could not be posted \nError: ' + error.message) })
}


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


//Login 
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