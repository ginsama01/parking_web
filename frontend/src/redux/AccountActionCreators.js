import * as AccountActionTypes from './AccountActionTypes';
import { baseUrl } from '../shared/baseUrl';


export const fetchLoveParks = () => (dispatch) => {
    dispatch(loveParksLoading(true));

    return fetch(baseUrl + 'accounts/favorite',{credentials: "include"})
    
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
        .then(love_parks => dispatch(addLoveParks(love_parks)))
        .catch(error => dispatch(loveParksFailed(error.message)));
}

export const loveParksLoading = () => ({
    type: AccountActionTypes.LOVEPARKS_LOADING
});

export const loveParksFailed = (errmess) => ({
    type: AccountActionTypes.LOVEPARKS_FAILED,
    payload: errmess
});

export const addLoveParks = (love_parks) => ({
    type: AccountActionTypes.ADD_LOVEPARKS,
    payload: love_parks
});

export const fetchOrderParks = () => (dispatch) => {
    dispatch(orderParksLoading(true));

    return fetch(baseUrl + 'accounts/pending',{credentials: "include"})
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
        .then(order_parks => dispatch(addOrderParks(order_parks)))
        .catch(error => dispatch(orderParksFailed(error.message)));
}

export const orderParksLoading = () => ({
    type: AccountActionTypes.ORDERPARKS_LOADING
});

export const orderParksFailed = (errmess) => ({
    type: AccountActionTypes.ORDERPARKS_FAILED,
    payload: errmess
});

export const addOrderParks = (order_parks) => ({
    type: AccountActionTypes.ADD_ORDERPARKS,
    payload: order_parks
});

export const fetchHistoryParks = () => (dispatch) => {
    dispatch(historyParksLoading(true));

    return fetch(baseUrl + 'accounts/parking',{credentials: "include"})
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
        .then(history_parks => dispatch(addHistoryParks(history_parks)))
        .catch(error => dispatch(historyParksFailed(error.message)));
}

export const historyParksLoading = () => ({
    type: AccountActionTypes.HISTORYPARKS_LOADING
});

export const historyParksFailed = (errmess) => ({
    type: AccountActionTypes.HISTORYPARKS_FAILED,
    payload: errmess
});

export const addHistoryParks = (history_parks) => ({
    type: AccountActionTypes.ADD_HISTORYPARKS,
    payload: history_parks
});

export const fetchInfoUser = () => (dispatch) => {
    dispatch(infoUserLoading(true));

    return fetch(baseUrl + 'accounts/info',{credentials: "include"})
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
        .then(info_user => dispatch(addInfoUser(info_user)))
        .catch(error => dispatch(infoUserFailed(error.message)));
}

export const infoUserLoading = () => ({
    type: AccountActionTypes.INFOUSER_LOADING
});

export const infoUserFailed = (errmess) => ({
    type: AccountActionTypes.INFOUSER_FAILED,
    payload: errmess
});

export const addInfoUser = (info_user) => ({
    type: AccountActionTypes.ADD_INFOUSER,
    payload: info_user
});

//Change Info
export const postChange = (username, firstname, lastname, email, phone, address) => (dispatch) => {
    const changeUser = {
        username: username,
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        address: address,
    };
    return fetch(baseUrl + 'accounts/info', 
        {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(changeUser),
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
            alert('Thay đổi thông tin tài khoản thành công'); 
            //window.location.href='/'
        })
        .then(user => dispatch(addChange(user)))
        .catch(error =>  { console.log('post change', error.message); alert('Your account could not be posted\nError: '+error.message); });
    }

export const changeFailed = (errmess) => ({
    type: AccountActionTypes.CHANGE_FAILED,
    payload: errmess
});

export const addChange = (user) => ({
    type: AccountActionTypes.ADD_CHANGE,
    payload: user
});

//delete user
export const postDelete = (username, email) => (dispatch) => {
    return fetch(baseUrl + 'accounts/info', 
        {
            method: 'DELETE',
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
        .then(response => {
            alert('Xóa tài khoản thành công'); 
            window.location.href='/'
        })
        .then(user => dispatch(addDeleteUser(user)))
        .catch(error =>  { console.log('post delete user', error.message); alert('Your account could not be posted\nError: '+error.message); });
    }

export const deleteUserFailed = (errmess) => ({
    type: AccountActionTypes.DELETEUSER_FAILED,
    payload: errmess
});

export const addDeleteUser = (user) => ({
    type: AccountActionTypes.ADD_DELETEUSER,
    payload: user
});

//delete lovepark
export const postDeleteLovepark = (parks) => (dispatch) => {
    const deleteLovepark = {
        flist_list: parks
    };
    return fetch(baseUrl + 'accounts/favorite', 
        {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(deleteLovepark),
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
            alert('Xóa bãi đỗ thành công'); 
            return response;  
        })
        .catch(error =>  { console.log('post delete lovepark', error.message); alert('Your account could not be posted\nError: '+error.message); });
    }

export const deleteLoveparkFailed = (errmess) => ({
    type: AccountActionTypes.DELETELOVEPARK_FAILED,
    payload: errmess
});

export const addDeleteLovepark = (user) => ({
    type: AccountActionTypes.ADD_DELETELOVEPARK,
    payload: user
});

//delete historypark
export const postDeleteHistorypark = (parks) => (dispatch) => {
    const deleteHistorypark = {
        parking_list: parks
    };
    return fetch(baseUrl + 'accounts/parking', 
        {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(deleteHistorypark),
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
            alert('Xóa bãi đỗ thành công'); 
        })
        .then(park=> dispatch(addDeleteLovepark(park)))
        .catch(error =>  { console.log('post delete historypark', error.message); alert('Your account could not be posted\nError: '+error.message); });
    }

export const deleteHistoryparkFailed = (errmess) => ({
    type: AccountActionTypes.DELETEHISTORYPARK_FAILED,
    payload: errmess
});

export const addDeleteHistorypark = (user) => ({
    type: AccountActionTypes.ADD_DELETEHISTORYPARK,
    payload: user
});

//delete orderpark
export const postDeleteOrderpark = (parks) => (dispatch) => {
    const deleteOrderpark = {
        pending_list: parks
    };
    return fetch(baseUrl + 'accounts/pending', 
        {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(deleteOrderpark),
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
            alert('Hủy đặt trước bãi đỗ thành công'); 
            return response;  
        })
        .catch(error =>  { console.log('post delete orderpark', error.message); alert('Your account could not be posted\nError: '+error.message); });
    }

export const deleteOrderparkFailed = (errmess) => ({
    type: AccountActionTypes.DELETEORDERPARK_FAILED,
    payload: errmess
});

export const addDeleteOrderpark = (user) => ({
    type: AccountActionTypes.ADD_DELETEORDERPARK,
    payload: user
});