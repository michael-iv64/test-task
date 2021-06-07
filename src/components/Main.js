import React, {Component} from 'react';
import { connect } from 'react-redux';

import {fetchPostsPagination} from '../redux/actions/actions';

import TaskMain from './TaskMain';
// import PostForm from '../forms/PostForm';
// import PostForm from '../forms/PostForm';
import PostFormWithAlert from '../forms/PostFormWithAlert';
import PaginationBlockNew from '../UI/PaginationBlockNew';

import {Loader} from '../components/Loader';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount() {
    this.props.newChangedPost(`https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Michael&sort_field=${this.props.sort.sort_field}&sort_direction=asc&page=${this.props.sort.page}`)
  }
  render() {
    const loading = this.props.sort.loading
        if (loading) {
            return <Loader />
        }
        if (this.props.initTasks.length === 0) {
          return <p>Постов пока нет! </p>
          }
          else
    return (
      <>
        <div className="container pt-3">
          <div className="row">
            <div className="col">
              <h3>Загруженные с сервера задачи</h3>
              <h5>page : {this.props.sort.page }</h5>
              {this.props.initTasks.message.tasks.map(task => <li key={task.id}><TaskMain task={task} /></li>)}
              <br />
              <br />
              <PostFormWithAlert />
              <PaginationBlockNew />
            </div>
          </div>
        </div>
      </>
    )
  }
}
function mapState(state) {
    return {
      initTasks: state.posts.fetchedPosts,
      sort: state.app
    }
  }
  
const mapDispatchToProps = dispatch => {
  return {
    newChangedPost: url => dispatch(fetchPostsPagination(url))

  };
};

export default connect(mapState, mapDispatchToProps)(Main);
// rsf