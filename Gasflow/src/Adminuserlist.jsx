import './Admin.css';
import Sidebar from './Sidebar';
import Userlist from './Userlist';
import Retailerlist from './Retailerlist';
import Stockinfo from "./Stockinfo";
import Adminsales from './Adminsales';

function Adminuserlist(){
    return(
        <>
        <div className="admin-container">
            <Sidebar/>
            <Userlist/>
        </div>
        </>
    );
}
export default Adminuserlist;