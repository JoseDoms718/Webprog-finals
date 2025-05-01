import './Adminorderstatus.css';

function Adminorderstatus() {
    return (
        <div className="Productstatus">
            <span className="status-label">Product Status :</span>
            <button className="productstatus-button pending">Pending</button>
            <button className="productstatus-button preparing">Preparing</button>
            <button className="productstatus-button delivery">On Delivery</button>
            <button className="productstatus-button delivered">Delivered</button>
        </div>
    );
}

export default Adminorderstatus;
