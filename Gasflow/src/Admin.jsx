import './Admin.css';
import Sidebar from './Sidebar';
import Userlist from './Userlist';
import Retailerlist from './Retailerlist';
import Stockinfo from "./Stockinfo";
import Adminsales from './Adminsales';

function Admin(){
    return(
        <>
        <div className="admin-container">
            <Sidebar/>
            <Stockinfo/>
        </div>
        </>
    );
}
export default Admin;