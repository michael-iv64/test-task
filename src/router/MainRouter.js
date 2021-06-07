import React, { Component } from 'react';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './MainRouter.module.css';
import App from '../App';
import Main from '../components/Main';
import SignInForm from '../forms/SignInForm';

// import AppPgination from '../components/components-test/AppPagination';

import Admin from '../components/Admin';

// import AsyncPosts from '../components/AsyncPosts';

class MainRouter extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }
    render() {
        console.log('auth', this.props.auth.token.length)
        return (
            <BrowserRouter>
            <div className = {styles.main}>
                <nav>
                    <ul className={styles.header}>
                        <li>
                            <Link to="/" className={styles.navWrapper}>Главная </Link>
                        </li><br />
                        {/* <li>
                            <Link to="/asyncPosts" className={styles.navWrapper}>Async Posts</Link>
                        </li><br /> */}
                        <li>
                            <Link to="/admin" className={styles.navWrapper}>Admin</Link>
                        </li><br />
                     
                        {/* <li>
                            <Link to="/login" className={styles.navWrapper}>Login</Link>
                        </li><br /> */}
                        {/* <li>
                            <Link to="/pagination" className={styles.navWrapper}>Pagination</Link>
                        </li><br /> */}
                        {/* <li>
                            <Link to="/app" className={styles.navWrapper}>App</Link>
                        </li><br /> */}
                    </ul>

                    <Switch>
                        {/* <Route path="/asyncPosts">
                            <AsyncPosts />
                        </Route> */}
                        {/* <Route exact path="/pagination">
                                <AppPgination />
                            </Route> */}
                            
                            {this.props.auth.token.length === 0
                                ?
                                <Route exact path="/admin">
                                    <SignInForm />
                                </Route>
                                :
                                <Route exact path="/admin">
                                        <Admin />
                                </Route>
                            }
                        {/* <Route exact path="/app">
                            <App />
                        </Route> */}
                            <Route exact path="/">
                                <Main />
                        </Route>
                    </Switch>
                </nav>
            </div>
            </BrowserRouter>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(MainRouter)