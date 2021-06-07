import {NEXT_PAGE} from '../constants/constants';
export function paginationPage(page) {
    return {
        type: NEXT_PAGE,
        payload: page
    }
}