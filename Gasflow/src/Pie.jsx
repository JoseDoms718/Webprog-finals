import React from 'react';
import Chart from 'react-apexcharts';

function Pie() {
  const options = {
    chart: {
      width: 380,
      type: 'pie',
      toolbar: {
        show: false, // ensures the export/download menu is hidden
      },
    },
    labels: ['1.4kg LPG', '11kg LPG', '22kg LPG', '50kg LPG'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  const series = [30, 120, 80, 50]; // Example data per LPG size

  return (
    <div className="chart-container">
      <Chart options={options} series={series} type="pie" width={380} />
    </div>
  );
}

export default Pie;