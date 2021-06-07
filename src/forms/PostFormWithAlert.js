import React, {useState} from 'react';
import axios from 'axios'
import { useDispatch, useSelector} from 'react-redux';
import { Loader } from '../components/Loader';
import { showAlert } from '../redux/actions/actions';
import { Alert } from '../components/Alert';


// import styles from './PostForm.module.css';

function PostForm(props) {
    const [data, setData] = useState({
        username: '',
        email: '',
        text: ''
    })
    
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.fetchedPosts)
    const loading = useSelector(state => state.app.loading)
    const alert = useSelector(state => state.app.alert)
    
    if (loading) {
        return <Loader />
    }
    if (posts.length === 0) {
        return (<>
        <p>Постов пока нет</p>
        </>)

    }

    // const url = ''
    
    const url = `https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=Michael`

    const headers = {
        'Content-Type': 'multipart/form-data'

    }
    
    let formData = new FormData()
    formData.append('username', data.username)
    formData.append('email', data.email)
    formData.append('text', data.text)
      
    function submit(e) {
        e.preventDefault();
        if (!data.username.trim() || !data.email.trim() || !data.text.trim()) {
            return dispatch(showAlert('Заполните все необходимые поля'))
        }
        
        axios.post(url,formData, {headers : headers})
            .then(res => {
            console.log(res.data)
        })
        return dispatch(showAlert('Задача успешно добавлена!'))

    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        // console.log(newdata)
    }
    return (
        <div>
            <form onSubmit={(e) => submit(e)}>
            {alert && <Alert text={alert} />}
                <div className='form-group'>
                <label htmlFor="title"><h4>Добавление новых задач</h4></label>
                <input
                    onChange={(e) => handle(e)}
                    className="form-control"
                    id="username"
                    value={data.username}
                    placeholder='username'
                    type="text">
                </input><br />
                <input
                    onChange={(e) => handle(e)}
                    className="form-control"
                    id="text"
                    value={data.text}
                    placeholder='text'
                    type="text">
                </input><br />
                <input onChange={(e) => handle(e)}
                className="form-control"
                    id="email" value={data.email}
                    placeholder='email'
                    type="email">
                </input><br />
                </div>
                <button className="btn btn-success" type="Submit">Добавить задачу</button>
            </form>
        </div>
    );
}

export default PostForm;