import './Admin.css';
import Sidebar from './Sidebar';
import Userlist from './Userlist';
import Retailerlist from './Retailerlist';
import Stockinfo from "./Stockinfo";
import Adminsales from './Adminsales';
import Adminproductstatus from './Adminorderstatus';
import Orderlistpending from './Orderlistpending';

function Admin(){
    return(
        <>
        <div className="admin-container">
            <Sidebar/>
            <Adminproductstatus/>
            <Orderlistpending/>
        </div>
        </>
    );
}
export default Admin;