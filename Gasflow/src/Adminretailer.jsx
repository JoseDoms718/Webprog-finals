import Sidebar from "./Sidebar";
import Retailerlist from "./Retailerlist";
import './Admin.css';

function Adminretailer(){
    return(
        <>
        <div className="admin-container">
            <Sidebar/>
        </div>
        <div className="adminretailer-container">
            <Retailerlist/>
        </div>
        </>
    );
}
export default Adminretailer;