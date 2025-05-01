  import Pie from "./Pie";
  import Bar from "./Bar";
  import Polar from "./Polar";
  import Sidebar from "./Sidebar";
  import './Adminsales.css';

  function Adminsales() {
    return (
      <div className="admin-container">
        <Sidebar />
        <div className="admin-sales-container">
            <Bar />
          <div className="admin-sales-container-bottom">
              <Pie />
              <Polar />
          </div>
        </div>
      </div>
    );
  }

  export default Adminsales;
