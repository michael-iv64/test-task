import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createPost, showAlert } from '../redux/actions/actions';
import { Alert } from './Alert';

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            username: ''
        }
    }

    submitHandler = (event) => {
        event.preventDefault()

        const { title } = this.state
        const { username } = this.state
        if (!title.trim() || !username.trim()) {
            return this.props.showAlert('Заполните все необходимые поля')
        }
        const newPost = {
            title: this.state.title,
            username: this.state.username,
            id: Date.now().toString()
        }
        console.log({title})
        console.log({username})
        console.log(newPost)
        this.props.createPost(newPost)
        this.setState({
            title: '',
            username: ''
        })
    }

    changeInputHandler = event => {
        this.setState(prev => ({...prev,...{
            [event.target.name]: event.target.value
        }}))
    }
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                {this.props.alert && <Alert text={this.props.alert} />}
                <div className="form-group">
                    <label htmlFor="title">Заголовок поста</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={this.state.title}
                        name="title"
                        onChange={this.changeInputHandler}
                    />
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={this.state.username}
                        name="username"
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button className="btn btn-success" type="Submit">Создать</button>
            </form>
        );
    }
}

const mapDispatchToProps = {
    // createPost: createPost
    createPost, showAlert
}

const mapStateToProps = state => ({
    alert: state.app.alert
})
export default connect(mapStateToProps, mapDispatchToProps)(PostForm);