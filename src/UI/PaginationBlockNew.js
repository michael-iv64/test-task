import React, {Component} from 'react';
import { connect } from 'react-redux';

import { changeUrlAction, fetchPostsPagination } from '../redux/actions/actions';
import './PaginationBlockNew.css';

class PaginationBlock extends Component {
    constructor(props) {
        super(props)
        this.changeUrlPage = this.changeUrlPage.bind(this)
        this.changeUrlField = this.changeUrlField.bind(this)
    }

    changedPost() {
        let url = `https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Michael&sort_field=${this.props.sort.sort_field}&sort_direction=asc&page=${this.props.sort.page}`
        return this.props.newChangedPost(url)
    }

    changeUrlPage(e) {
        this.props.changeUrl({
            page: e.target.textContent
        })
        setTimeout(() => {
            this.changedPost()
        }, 0)
    }
    changeUrlField(e) {
        this.props.changeUrl({
            sort_field: e.target.textContent
        })
        setTimeout(() => {
            this.changedPost()
        }, 0)

    }
    render() {
        return (
            <>
            <div className='left'>
                {/* <button className='paginationButton'>Previous</button> */}
                <button className='paginationButton' onClick = {this.changeUrlPage}>1</button>
                <button className='paginationButton' onClick = {this.changeUrlPage} >2</button>
                <button className='paginationButton' onClick = {this.changeUrlPage} >3</button>
                <button className='paginationButton' onClick = {this.changeUrlPage} >4</button>
                <button className='paginationButton' onClick = {this.changeUrlPage} >5</button>
                {/* <button className='paginationButton'>Next</button> */}
                </div>
            <div className='sort'>
                <p className='sortTextTitle'>sort : { this.props.sort.sort_field}</p>
                <p className='sortText' onClick = {this.changeUrlField} >email</p>
                <p className='sortText' onClick = {this.changeUrlField} >status</p>
                <p className='sortText' onClick = {this.changeUrlField} >username</p>
            </div>
        </>
        );
    }
}
    
const mapStateToProps = state => {
    return {
        sort: state.app
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeUrl: newSort => dispatch(changeUrlAction(newSort)),
        newChangedPost: url => dispatch(fetchPostsPagination(url))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PaginationBlock);