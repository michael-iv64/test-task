import React, {useState} from 'react';
import axios from 'axios'
// import styles from './PostForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTokenAction } from '../redux/actions/auth';

import { showAlert } from '../redux/actions/actions';
import { Alert } from '../components/Alert';


function SignInForm() {
    const dispatch = useDispatch()
    const [data, setData] = useState({
        username: '',
        password: ''
    })
    const alert = useSelector(state => state.app.alert)

    
    const url = `https://uxcandy.com/~shapoval/test-task-backend/v2/login?developer=Michael`
    // const url = '/'

    const headers = {
        'Content-Type': 'multipart/form-data'

    }
    
    let formData = new FormData()
    formData.append('username', data.username)
    formData.append('password', data.password)
      
    function submit(e) {
        e.preventDefault();
        axios.post(url,formData, {headers : headers})
            .then(res => {

                console.log(res.data)
                if (res.data.status.length === 2) {
                    return dispatch(getTokenAction(res.data.message.token))
                }
        else  return dispatch(showAlert('Неправильное имя пользователя или пароль!'))
        })
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log('newdata',newdata)
    }
    return (
        <div className="w-50 container pt-3">
            <form onSubmit={(e) => submit(e)}>
            {alert && <Alert text={alert} />}

                <div className='form-group'>
                <label htmlFor="title"><h4>Войти в систему</h4></label>

                <input
                    onChange={(e) => handle(e)}
                    className="form-control"
                    id="username"
                    placeholder='username'
                    type="text">
                </input><br />
                    <input
                    onChange={(e) => handle(e)}
                    className="form-control"
                    id="password"
                    placeholder='password'
                    type="password">
                </input><br />
      
                </div>
                <button className="w-100 btn btn-primary" type="Submit">Войти</button>
            </form>
        </div>
    );
}

export default SignInForm;