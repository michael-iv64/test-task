import React, {useState} from 'react';
import axios from 'axios'
// import styles from './PostForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { showAlert } from '../redux/actions/actions';
import { Alert } from '../components/Alert';




function AdminForm({task}) {
    // const url = ''
    const [data, setData] = useState({
        id: task.id,
        username: task.username,
        email: task.email,
        text: task.text,
        status: task.status,
        token: "RFNkSGlDZHVycVNrM3pxMjdyVEo4VzRtVWZCZkcrbzZ5anFLTFVNZ0JOQmROczZkWUUrQ04rM0c3QVVDZUdqM01uUjIvRXN5dlRJaEEyVGRYR09Tdmc9PQ=="
    })

    const dispatch = useDispatch()
    const alert = useSelector(state => state.app.alert)

    
    const url = `https://uxcandy.com/~shapoval/test-task-backend/v2/edit/${task.id}?developer=Michael`
    // const url = '/'

    const headers = {
        'Content-Type': 'multipart/form-data'

    }
    
    let formData = new FormData()
    formData.append('id', data.id)
    formData.append('username', data.username)
    formData.append('email', data.email)
    formData.append('text', data.text)
    formData.append('status', data.status)
    formData.append('token', data.token)
      
    function submit(e) {
        e.preventDefault();
        axios.post(url,formData, {headers : headers})
            .then(res => {
            console.log(res.data)
            })
            return dispatch(showAlert('Задача успешно изменена!'))
        
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        // console.log('newdata',newdata)
    }
    return (
        <div>
            <form onSubmit={(e) => submit(e)}>
            {alert && <Alert text={alert} />}

                <div className='form-group'>
                <label htmlFor="title"><h4>Редактирование</h4></label>

                <input
                    onChange={(e) => handle(e)}
                    className="form-control"
                    id="username"
                    defaultValue={task.username}
                    placeholder='username'
                    type="text">
                </input><br />
                    <input
                    onChange={(e) => handle(e)}
                    className="form-control"
                    id="email"
                    defaultValue={task.email}
                    placeholder='email'
                    type="email">
                </input><br />
                <input
                    onChange={(e) => handle(e)}
                    className="form-control"
                    id="text"
                    defaultValue={task.text}
                    placeholder='text'
                    type="text">
                </input><br />
                <input
                    onChange={(e) => handle(e)}
                    className="form-control"
                    id="status"
                    defaultValue={task.status}
                    placeholder='status'
                    type="text">
                </input><br />
                </div>
                <button className="btn btn-success" type="Submit">Отправить на сервер</button>
            </form>
        </div>
    );
}

export default AdminForm;