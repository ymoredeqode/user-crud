import * as Constants from '../../Constants/ActionKeys.js';
import firebase from '../../firebase';

export const fetchUsers = () => {
    return (dispatch) => {
        firebase.ref().child('users').on('value',
            snapshot => {
                if (snapshot.val() !== null) {
                    const data = [];
                    snapshot.forEach((childSnapshot) => {
                        var childKey = childSnapshot.key;
                        var users = childSnapshot.val();
                        data.push(users);
                    });
                    dispatch(fetchUsersSuccess(data));
                }
            }
        );
    }
}

export const fetchUsersSuccess = (payload) => {
    return {
        type: Constants.FETCH_USERS_SUCCESS,
        payload: payload
    }
}


export const addUser = (payload) => {
    return {
        type: Constants.ADD_USER,
        payload: payload
    }
}


export const updateUser = (payload) => {
    return {
        type: Constants.UPDATE_USER,
        payload: payload
    }
}


export const deleteUser = (payload) => {
    return {
        type: Constants.DELETE_USER,
        payload: payload
    }
}



