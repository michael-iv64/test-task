import { NEXT_PAGE } from '../constants/constants';

const initialPage = {page: 1}
export function pageReducer(state = initialPage, action) {
    switch (action.type) {
        case NEXT_PAGE:
            // console.log('action.page',action.payload)
            return {
                ...state, page:action.payload
            };
        default:
            return state
    }
}