import * as Constants from '../../Constants/ActionKeys.js';

const initialState = {
    posts: [],
    isLoading: true
};

const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constants.FETCH_POST_SUCCESS:
            return { ...state, posts: action.payload.posts, isLoading: action.payload.isLoading }

        case Constants.UPDATE_POST:
            console.log(action.payload, 'action.payload')
            const UpdateState = state.posts.map((item) => item.id === action.payload.posts.id ? action.payload.posts : item);
            console.log(UpdateState, 'UpdateState')
            return { ...state, posts:UpdateState , isLoading: action.payload.isLoading}

        default:
            return state
    }


}

export default PostReducer