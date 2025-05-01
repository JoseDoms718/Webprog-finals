import './Adminorderstatus.css';
import { Link } from 'react-router-dom';

function Adminorderstatus() {
    return (
        <div className="Productstatus">
            <span className="status-label">Product Status :</span>
            <Link to="/admin" className="productstatus-button pending">Pending</Link>
            <Link to="/order-list-preparing" className="productstatus-button preparing">Preparing</Link>
            <Link to="/order-list-delivery" className="productstatus-button delivery">Dispatched</Link>
            <Link to="/order-list-finished" className="productstatus-button delivered">Delivered</Link>
        </div>
    );
}

export default Adminorderstatus;
