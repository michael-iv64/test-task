
import Tasks from './Tasks';
import PaginationBlockNew from '../UI/PaginationBlockNew';

function Admin() {
  // console.log('token',localStorage.getItem('token'))
  return (
    <div className="container pt-3">
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
