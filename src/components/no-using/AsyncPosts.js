import React, {Component} from 'react';
import { connect } from 'react-redux';

import Post from './Post';
import Task from '../Task';



class AsyncPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numPage: 1,
      currentPage: 1
    }
  }

  componentDidMount() {
    // this.props.fetchData(`https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Michael&sort_field=status&sort_direction=asc&page=${this.props.page}`)
  }

    render() {
        // console.log('this.props.initTasks.message.tasks', this.props.initTasks.message.tasks)
        // console.log('this.props.initTasks.message.tasks.length', !this.props.initTasks.message.tasks.length )
        if (this.props.initTasks.length === 0) {
        return <p>Постов пока нет! </p>
        }
        else

    return (
    <>
            <h2>Async Posts here</h2>
            {/* {this.props.initTasks.message.tasks.map(task => <Task task={task} key={task.id}/>)} */}
            {this.props.initTasks.message.tasks.map(post => <Post post={post} key={post.id}/>)}
  
    </>
    )
        // return this.props.initTasks.message.tasks.map(task => <Task task={task} key={task.id}/>)
        // return this.props.initTasks.message.tasks.map(task => <Task task={task} key={task.id}/>)
  }

}


function mapStateToProps(state) {
    return {
      initTasks: state.posts.fetchedPosts,
    //   page : state.nextPage.page

    }
  }
  
const mapDispatchToProps = dispatch => {
  return {
    // fetchData: url => dispatch(tasksFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AsyncPosts);
// rsf