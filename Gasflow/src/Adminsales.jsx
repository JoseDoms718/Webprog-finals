import Pie from "./pie";
import Bar from "./Bar";
import Polar from "./Polar";
import Sidebar from "./Sidebar";
import './Adminsales.css';

function Adminsales() {
  return (
    <div className="admin-page">
      <Sidebar />
      <div className="admin-sales-container">
        <div className="top-container">
          <Bar />
        </div>
        <div className="bottom-container">
          <div className="bottom-left">
            <Pie />
          </div>
          <div className="bottom-right">
            <Polar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminsales;
