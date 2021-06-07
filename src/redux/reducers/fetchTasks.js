import { TASKS_FETCH_DATA_SUCCESS } from '../constants/constants';
const initialTasks = {
    
        "status": "ok",
        "message": {
            "tasks": [
                {
                    "id": 1,
                    "username": "Test User",
                    "email": "test_user_1@example.com",
                    "text": "Hello, world!",
                    "status": 10,
                },
                {
                    "id": 3,
                    "username": "Test User 2",
                    "email": "test_user_2@example.com",
                    "text": "Hello from user 2!",
                    "status": 0,
                },
                {
                    "id": 4,
                    "username": "Test User 3",
                    "email": "test_user_3@example.com",
                    "text": "Hello from user 3!",
                    "status": 0,
                }
            ],
            "total_task_count": "5"
        }
    
}

const itemTasks = [
    {
        "id": 1,
        "username": "Test User",
        "email": "test_user_1@example.com",
        "text": "Hello, world!",
        "status": 10,
    },
    {
        "id": 3,
        "username": "Test User 2",
        "email": "test_user_2@example.com",
        "text": "Hello from user 2!",
        "status": 0,
    },
    {
        "id": 4,
        "username": "Test User 3",
        "email": "test_user_3@example.com",
        "text": "Hello from user 3!",
        "status": 0,
    }
]

export function fetchTasks(state = initialTasks, action) {
    switch (action.type) {
        case TASKS_FETCH_DATA_SUCCESS:
            return action.tasks;
        default:
            return state;
    }
}
