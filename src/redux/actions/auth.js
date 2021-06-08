import { GET_TOKEN } from '../constants/constants';

export function getTokenAction(token) {
    return {
        type: GET_TOKEN,
        payload: token
    }
}