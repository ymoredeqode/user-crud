import * as Constants  from '../../Constants.js';
import firebase from '../../firebase';

export const fetchUsers = () => {
    return (dispatch) => {
        firebase.child('users').on('value' ,
            snapshot => {
                if(snapshot.val()!==null){
                    snapshot.forEach((childSnapshot) => {
                        var childKey = childSnapshot.key;
                        var users = childSnapshot.val();
                        console.log(users);
                        dispatch(fetchUsersSuccess(users))
                    });
                }
            }
            );

    }
}

  
  export const fetchUsersSuccess = users => {
    return {
      type: Constants.FETCH_USERS_SUCCESS,
      payload: users
    }
  }


export const addUser = (payload) =>  {
    return {
        type:Constants.ADD_USER,
        payload:payload
    }
}


export const updateUser = (payload) =>  {
    return {
        type:Constants.UPDATE_USER,
        payload:payload
    }
}


export const deleteUser = (payload) =>  {
    return {
        type:Constants.DELETE_USER,
        payload:payload
    }
}


export const addreminder = (payload) =>  {
    return {
        type:Constants.ADD_REMINDER,
        payload:payload
    }
}


export const updatereminder = (payload) =>  {
    return {
        type:Constants.UPDATE_REMINDER,
        payload:payload
    }
}


export const deletereminder = (payload) =>  {
    return {
        type:Constants.DELETE_REMINDER,
        payload:payload
    }
}

