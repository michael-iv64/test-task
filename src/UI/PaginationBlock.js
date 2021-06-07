import React, {Component} from 'react';
import { connect } from 'react-redux';

import { paginationPage } from '../redux/actions/paginationPage';

import Select from './Select';

class PaginationBlock extends Component {
    constructor(props) {
        super(props)
        this.pageNum = this.pageNum.bind(this)
    }

    // componentDidMount() {
    //     this.props.fetchData(`https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Michael&sort_field=status&sort_direction=asc&page=${this.props.pages}`)
    //   }
    pageNum(e){
        console.log(e.target.textContent)
        return this.props.paginationPage(e.target.textContent)
    }

    render() {

        return (
            <>
                <Select />
                <select className="form-select form-select-sm" aria-label=".form-select-sm example" defaultValue="">
                    {/* <option selected>Сортировать по :</option> */}
                    <option defaultValue="1">One</option>
                    <option defaultValue="2">Two</option>
                    <option defaultValue="3">Three</option>
                </select>
                
            <div>
                {/* <button>less</button> */}
                <button onClick = {this.pageNum}>{+this.props.pages}</button>
                <button onClick = {this.pageNum} >{+this.props.pages + 1}</button>
                <button onClick = {this.pageNum} >{+this.props.pages + 2}</button>
                {/* <button>more</button> */}
                </div>
                            
            <nav aria-label="...">
                <ul className="pagination">
                    <li className="page-item disabled">
                    <p className="page-link"  tabIndex="-1" aria-disabled="true">Previous</p>
                    </li>
                    <li className="page-item"><p className="page-link" >1</p></li>
                    <li className="page-item active" aria-current="page">
                    <p className="page-link" >2</p>
                    </li>
                    <li className="page-item"><p className="page-link" >3</p></li>
                    <li className="page-item">
                    <p className="page-link" >Next</p>
                    </li>
                </ul>
            </nav>
        </>
        );
    }
}
    
const mapStateToProps = state => {
    return {
        pages: state.pageReducer.page
    }
}

const mapDispatchToProps = {
    paginationPage
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationBlock);