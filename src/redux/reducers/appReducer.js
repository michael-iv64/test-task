import { SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, CHANGE_URL } from '../constants/constants';
const initialState = {
    loading: false,
    alert: null,
    page: 1,
    sort_field: 'status',
    sort_direction: 'asc',
    developer: 'Michael',
    

}
export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}
        case SHOW_ALERT:
            return {...state, alert: action.payload}
        case HIDE_ALERT:
            return { ...state, alert: null }
        case CHANGE_URL:
            return {...state,  ...action.payload}
        default: return state
    }

}