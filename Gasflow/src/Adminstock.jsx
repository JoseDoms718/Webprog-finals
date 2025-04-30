import Sidebar from "./Sidebar";
import Stockinfo from "./Stockinfo";
import './Adminstock.css';

function Adminstock(){
    return (
        <div className="admin-layout">
            <Sidebar />
            <Stockinfo />
        </div>
    );
}

export default Adminstock;
