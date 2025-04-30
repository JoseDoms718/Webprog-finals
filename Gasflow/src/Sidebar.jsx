import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faStoreAlt, faBoxOpen, faWarehouse, faChartLine, faUsersCog, faCog, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function Sidebar() {
    return (
        <div className="sidebar-container">
            <div className="sidebar-header">
                <h1><span className="gas">GAS</span><span className="flow">flow</span></h1>
            </div>
            <div className="sidebar-navlinks">
                <ul>
                    <li><a href="/orders"><FontAwesomeIcon icon={faTachometerAlt} /> Orders</a></li>
                    <li><Link to="/adminretailer"><FontAwesomeIcon icon={faStoreAlt} /> Retailers</Link></li>
                    <li><a href="/products"><FontAwesomeIcon icon={faBoxOpen} /> Products</a></li>
                    <li><Link to="/adminstock"><FontAwesomeIcon icon={faWarehouse} /> Inventory</Link></li>
                    <li><Link to="/adminsales"><FontAwesomeIcon icon={faChartLine} /> Sales Report</Link></li>
                    <li><a href="/user-management"><FontAwesomeIcon icon={faUsersCog} /> User Management</a></li>
                    <li><a href="/settings"><FontAwesomeIcon icon={faCog} /> Settings</a></li>
                    <li><a href="/logout"><FontAwesomeIcon icon={faPowerOff} /> Logout</a></li>
                </ul>
            </div>
        </div>
    );
}


export default Sidebar;
