
import Tasks from './Tasks';
import PaginationBlockNew from '../UI/PaginationBlockNew';
import './Task.css'
import { useDispatch } from 'react-redux';
import { getTokenAction } from '../redux/actions/auth';


function Admin() {
  // console.log('token',localStorage.getItem('token'))
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(getTokenAction(''))
  }
  return (
    <div className="container pt-3">
      <button className="btn btn-primary logoutButton" onClick={logoutHandler}>Logout</button>
      <div className="row">
        <div className="col">
                  <Tasks />
                  <PaginationBlockNew />
        </div>
      </div>
    </div>
  );
}

export default Admin;
