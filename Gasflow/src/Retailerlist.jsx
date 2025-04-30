import './Retailerlist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faEye } from '@fortawesome/free-solid-svg-icons';

function Retailerlist() {
    return (
        <div className="retailerlist-container p-4">
            <table className="retailerlist-table w-full border-collapse border border-gray-300">
                <thead className="retailerlist-table-head bg-gray-100">
                    <tr>
                        <th className="table-header border px-4 py-2 text-left">Name</th>
                        <th className="table-header border px-4 py-2 text-left">Email</th>
                        <th className="table-header border px-4 py-2 text-left">Address</th>
                        <th className="table-header border px-4 py-2 text-left">Contact</th>
                        <th className="table-header border px-4 py-2 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody className="retailerlist-table-body">
                    {/* Sample row structure */}
                    <tr className="retailerlist-row">
                        <td className="table-cell border px-4 py-2">Retailer Name</td>
                        <td className="table-cell border px-4 py-2">retailer@example.com</td>
                        <td className="table-cell border px-4 py-2">123 Street, City</td>
                        <td className="table-cell border px-4 py-2">123-456-7890</td>
                        <td className="table-cell border px-4 py-2 text-center">
                            <button className="view-button bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded mr-2">
                                <FontAwesomeIcon icon={faEye} /> View
                            </button>
                            <button className="edit-button bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2">
                                <FontAwesomeIcon icon={faEdit} /> Edit
                            </button>
                            <button className="delete-button bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                                <FontAwesomeIcon icon={faTrashAlt} /> Delete
                            </button>
                        </td>
                    </tr>
                    {/* Repeat for more rows */}
                </tbody>
            </table>
        </div>
    );
}

export default Retailerlist;
