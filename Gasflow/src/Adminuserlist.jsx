import './Admin.css';
import Sidebar from './Sidebar';
import Userlist from './Userlist';

function Adminuserlist(){
    return(
        <>
        <div className="admin-container">
            <Sidebar/>
        <div className="adminuserlist-container">
            <Userlist/>
        </div>
        </div>
        </>
    );
}
export default Adminuserlist;