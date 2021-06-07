import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { postsReducer } from './postsReducer';
import { fetchTasks } from './fetchTasks';
import { pageReducer } from './pageReducer';
import { authReducer } from './authReducer';

export const rootReducer = combineReducers({
    posts: postsReducer,
    app: appReducer,
    fetchTasks: fetchTasks,
    pageReducer: pageReducer,
    auth: authReducer
})