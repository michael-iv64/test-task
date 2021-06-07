import React, {Component} from 'react';
import { connect } from 'react-redux';

// import { tasksFetchData } from '../redux/actions/tasks';
import { fetchPostsPagination } from '../redux/actions/actions';
import { Loader } from '../components/Loader';

import Task from './Task';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numPage: 1,
      currentPage: 1
    }
  }
  
  componentDidMount() {
    // this.props.fetchData(`https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Michael&sort_field=status&sort_direction=asc&page=${this.props.page}`)
    this.props.newChangedPost(`https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Michael&sort_field=${this.props.app.sort_field}&sort_direction=asc&page=${this.props.app.page}`)
  }
  render() {
  
    const loading = this.props.app.loading
    if (loading) {
        return <Loader />
    }
    if (this.props.initTasks.length === 0) {
      return <p>Постов пока нет! </p>
      }
      else
    return (
      <>
        <h3>Загруженные задачи</h3>
      {this.props.initTasks.message.tasks.map(task => <li key={task.id}><Task task={task} /></li>)}
    </>
    )
  }
}

function mapState(state) {
    return {
      initTasks: state.posts.fetchedPosts,
      app: state.app
    }
  }
const mapDispatchToProps = dispatch => {
  return {
    newChangedPost: url => dispatch(fetchPostsPagination(url))
  };
};
export default connect(mapState, mapDispatchToProps)(Main);
// rsf