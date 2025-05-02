import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faStoreAlt, faWarehouse, faChartLine, faUsersCog, faCog, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function Sidebar() {
    return (
        <div className="sidebar-container">
            <div className="sidebar-header">
                <h1><span className="gas">GAS</span><span className="flow">flow</span></h1>
            </div>
            <div className="sidebar-navlinks">
                <ul>
                    <li><Link to="/admin"><FontAwesomeIcon icon={faTachometerAlt} /> Orders</Link></li>
                    <li><Link to="/adminretailer"><FontAwesomeIcon icon={faStoreAlt} /> Retailers</Link></li>
                    <li><Link to="/adminstock"><FontAwesomeIcon icon={faWarehouse} /> Inventory</Link></li>
                    <li><Link to="/adminsales"><FontAwesomeIcon icon={faChartLine} /> Sales Report</Link></li>
                    <li><Link to="/adminuserlist"><FontAwesomeIcon icon={faUsersCog} /> User Management</Link></li>
                    <li><a href="/settings"><FontAwesomeIcon icon={faCog} /> Settings</a></li>
                    <li><Link to="/login"><FontAwesomeIcon icon={faPowerOff} /> Logout</Link></li>
                </ul>
            </div>
        </div>
    );
}


export default Sidebar;
