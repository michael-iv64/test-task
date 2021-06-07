import React, {useState} from 'react';
import axios from 'axios'
// import styles from './PostForm.module.css';

function PostForm(props) {
    const [data, setData] = useState({
        username: '',
        email: '',
        text: ''
    })
    
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
        axios.post(url,formData, {headers : headers})
            .then(res => {
            console.log(res.data)
        })
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