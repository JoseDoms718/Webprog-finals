import './Admin.css';
import Sidebar from './Sidebar';
import Userlist from './Userlist';

function Admin(){
    return(
        <>
        <div className="admin-container">
            <Sidebar/>
            <Userlist/>
        </div>
        </>
    );
}
export default Admin;