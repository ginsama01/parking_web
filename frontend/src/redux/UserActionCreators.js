import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

// get all parks for maker
export const fetchAllParks = () => (dispatch) => {
    dispatch(allParksLoading(true));

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
        .then(all_parks => dispatch(addAllParks(all_parks)))
        .catch(error => dispatch(allParksFailed(error.message)));
}

export const allParksLoading = () => ({
    type: ActionTypes.ALLPARKS_LOADING
});

export const allParksFailed = (errmess) => ({
    type: ActionTypes.ALLPARKS_FAILED,
    payload: errmess
});

export const addAllParks = (all_parks) => ({
    type: ActionTypes.ADD_ALLPARKS,
    payload: all_parks
});


// fetch best parks list
export const fetchBestParks = () => (dispatch) => {
    dispatch(bestParksLoading(true));

    return fetch(baseUrl + 'parks/best', { credentials: 'include' })
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
        .then(best_parks => dispatch(addBestParks(best_parks)))
        .catch(error => dispatch(bestParksFailed(error.message)));
}

export const bestParksLoading = () => ({
    type: ActionTypes.BESTPARKS_LOADING
});

export const bestParksFailed = (errmess) => ({
    type: ActionTypes.BESTPARKS_FAILED,
    payload: errmess
});

export const addBestParks = (best_parks) => ({
    type: ActionTypes.ADD_BESTPARKS,
    payload: best_parks
});


// fetch cheap parks list
export const fetchCheapParks = () => (dispatch) => {
    dispatch(cheapParksLoading(true));

    return fetch(baseUrl + 'parks/cheap', { credentials: 'include' })
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
        .then(cheap_parks => dispatch(addCheapParks(cheap_parks)))
        .catch(error => dispatch(cheapParksFailed(error.message)));
}

export const cheapParksLoading = () => ({
    type: ActionTypes.CHEAPPARKS_LOADING
});

export const cheapParksFailed = (errmess) => ({
    type: ActionTypes.CHEAPPARKS_FAILED,
    payload: errmess
});

export const addCheapParks = (cheap_parks) => ({
    type: ActionTypes.ADD_CHEAPPARKS,
    payload: cheap_parks
});


// fetch near parks list
export const fetchNearParks = () => (dispatch) => {
    dispatch(nearParksLoading(true));

    return fetch(baseUrl + 'parks/near', { credentials: 'include' })
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
        .then(near_parks => dispatch(addNearParks(near_parks)))
        .catch(error => dispatch(nearParksFailed(error.message)));
}

export const nearParksLoading = () => ({
    type: ActionTypes.NEARPARKS_LOADING
});

export const nearParksFailed = (errmess) => ({
    type: ActionTypes.NEARPARKS_FAILED,
    payload: errmess
});

export const addNearParks = (near_parks) => ({
    type: ActionTypes.ADD_NEARPARKS,
    payload: near_parks
});


// park-status
export const fetchParkStatus = (park_id) => (dispatch) => {
    dispatch(parkStatusLoading(true));

    return fetch(baseUrl + 'parks/status/' + park_id, { credentials: 'include' })
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
export const fetchParkInfo = (park_id) => (dispatch) => {
    dispatch(parkInfoLoading(true));

    return fetch(baseUrl + 'parks/info/' + park_id, { credentials: 'include' })
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
export const fetchComments = (park_id) => (dispatch) => {
    return fetch(baseUrl + 'parks/comment/' + park_id, { credentials: 'include' })
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
export const postComment = (park_id, rating, content) => (dispatch) => {

    const newComment = {
        park_id: park_id,
        rating: rating,
        content: content
    }

    return fetch(baseUrl + 'parks/comment', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
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
        .then((newComment) => {
            alert('Bạn đã thêm đánh giá' + JSON.stringify(newComment))
        })
        .catch(error => {
            console.log('Post comments ', error.message)
            alert('Your comment could not be posted \nError: ' + error.message)
        })
}


//post report
export const postReport = (park_id, content) => (dispatch) => {

    const newReport = {
        park_id: park_id,
        content: content
    }

    return fetch(baseUrl + 'parks/report', {
        method: 'POST',
        body: JSON.stringify(newReport),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
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
        .then((newReport) => {
            alert('Bạn đã thêm report' + JSON.stringify(newReport))
        })
        .catch(error => {
            console.log('Post report ', error.message)
            alert('Your report could not be posted \nError: ' + error.message)
        })
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
        .then(response => {
            alert('Đăng ký thành công');
            window.location.href = '/'
        })
        .then(user => dispatch(addUser(user)))
        .catch(error => { console.log('post user', error.message); alert('Your account could not be posted\nError: ' + error.message); });
}

export const userFailed = (errmess) => ({
    type: ActionTypes.USER_FAILED,
    payload: errmess
});

export const addUser = (user) => ({
    type: ActionTypes.ADD_USER,
    payload: user
});


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
            window.location.href = '/'
        })
        .catch(error => { 
            error.json().then(body => {
                console.log(body.message);
                alert(body.message);
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
            window.location.href = '/'
        })
        .catch(error => { console.log('post user', error.message); alert('Your account could not be posted\nError: ' + error.message); });
}

// fetch search infomation
export const fetchSearchInfo = () => (dispatch) => {

    return fetch(baseUrl + 'first-search-info')
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
        .then(search_info => dispatch(addSearchInfo(search_info)))
        .catch(error => {console.log(error.message)});
}

export const addSearchInfo = (search_info) => ({
    type: ActionTypes.ADD_SEARCHINFO,
    payload: search_info
});


//post search infomation
export const postSearchInfo = (address, timein, timeout ) => (dispatch) => {

    const newSearchInfo = {
        address: address,
        timein: timein,
        timeout: timeout
    }

    return fetch(baseUrl + 'parks/search', {
        method: 'POST',
        body: JSON.stringify(newSearchInfo),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    })
        .then(response => {
            console.log(response);
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
        .then((newSearchInfo) => {
            alert("Tìm kiếm với: " + JSON.stringify(newSearchInfo));
        })
        .catch(error => {
            console.log('Post search info ', error.message)
            alert('Your search info could not be posted \nError: ' + error.message)
        })
}