import './Admin.css';
import Sidebar from './Sidebar';
import Adminorderstatus from './Adminorderstatus';
import Orderlistpending from './Orderlistpending';

function Admin(){
    return(
        <>
        <div className="admin-container">
            <Sidebar/>
            <div className="adminorder-container">
            <Adminorderstatus/>
            <Orderlistpending/>
            </div>
        </div>
        </>
    );
}
export default Admin;