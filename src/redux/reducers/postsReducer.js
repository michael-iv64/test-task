import {CREATE_POST, FETCH_POST, FETCH_POST_PAGINATION} from '../constants/constants';
const initialState = {
    posts: [],
    fetchedPosts: {
        status: '',
        message: {
            tasks: [{
                username: 'mike',
                status: '',
                text: 'nothing',
                id: ''
            }]
        }
    }
}

const init = {
    posts: [],
    fetchedPosts: []
}
export const postsReducer = (state = init, action) => {
    switch (action.type) {
        case CREATE_POST:
            // return {...state, posts: state.posts.concat(action.payload)}
            return { ...state, posts: [...state.posts, action.payload] }
        case FETCH_POST:
            return {...state, fetchedPosts: action.payload}
        case FETCH_POST_PAGINATION:
            return {...state, fetchedPosts: action.payload}
        default:
            return state
    }
}