import * as Constants from '../../Constants/ActionKeys.js';

export const fetchPosts = (pageCount) => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        // fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${pageCount}`)
            .then(response => response.json())
            .then((json) => {
                // console.log(json, 'json')
                dispatch(fetchPostsSuccess(json))
            });
    }
}

export const fetchPostsSuccess = (data) => {
    return {
        type: Constants.FETCH_POST_SUCCESS,
        payload: {
            posts: data,
            isLoading: false
        }
    }
}


export const updatePost = (data) => {
    return (dispatch) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: data.id,
                title: data.title,
                body: 'Yashwant',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                dispatch(updatePostSuccess(json))
            });
    }
}

export const updatePostSuccess = (data) => {
    return {
        type: Constants.UPDATE_POST,
        payload: {
            posts: data,
            isLoading: false
        }
    }
}