import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Polar = () => {
  const [state] = useState({
    series: [23, 17, 21, 14, 18, 10], // Sample data per municipality
    options: {
      chart: {
        type: 'polarArea',
        toolbar: {
          show: false,
        },
      },
      labels: [
        'Boac',
        'Gasan',
        'Mogpog',
        'Sta. Cruz',
        'Torrijos',
        'Buenavista'
      ],
      stroke: {
        colors: ['#fff'],
      },
      fill: {
        opacity: 0.85,
      },
      legend: {
        position: 'right'
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 260,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });

  return (
    <div className="chart-container">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="polarArea"
        height={350}
      />
    </div>
  );
};

export default Polar;
