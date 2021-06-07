import { CREATE_POST, FETCH_POST, HIDE_LOADER, SHOW_LOADER, SHOW_ALERT, HIDE_ALERT, REQUEST_POST, FETCH_POST_PAGINATION, CHANGE_URL } from "../constants/constants";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}
export function hideLoader() {
    return {
        type: HIDE_LOADER   
    }
}
export function showAlert(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })
        setTimeout(() => {
            dispatch(hideAlert())
        }, 3000)
    }
}
export function hideAlert() {
    return {
        type: HIDE_ALERT   
    }
}

export function fetchPosts() {
    return async dispatch => {
        try {

            dispatch(showLoader())
            const response = await fetch(`https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Michael&sort_field=status&sort_direction=asc&page=1`)
            const json = await response.json()
            setTimeout(() => {
                dispatch({ type: FETCH_POST, payload: json })
                dispatch(hideLoader())
            }, 1000)
        } catch (e) {
            dispatch(showAlert(' Что-то пошло не так '))
            dispatch(hideLoader())

        }
    }
}

export function fetchPostsPagination(url) {
    return async dispatch => {
        try {

            dispatch(showLoader())
            const response = await fetch(url)
            const json = await response.json()
            dispatch({ type: FETCH_POST_PAGINATION, payload: json })
            dispatch(hideLoader())
        } catch (e) {
            dispatch(showAlert(' Что-то пошло не так '))
            dispatch(hideLoader())

        }
    }
}

// export function fetchPosts() {
//     return {
//         type: REQUEST_POST
//     }
// }

// export function changeUrlAction(newSort) {
//     return {
//         type: CHANGE_URL,
//         payload: newSort
//     }
// }

export function changeUrlAction(newSort) {
    return dispatch => {
        dispatch({
            type: CHANGE_URL,
            payload: newSort
        })
        // dispatch(fetchPostsPagination(`https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Michael&sort_field=status&sort_direction=asc&page=3`))
        // dispatch(fetchPostsPagination())
    }
}