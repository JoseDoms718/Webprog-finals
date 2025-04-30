import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Bar = () => {
  const [state] = useState({
    series: [
      {
        name: 'Stock Count',
        data: [120, 300, 180, 90], // sample stock values per product
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false, // hides the download menu
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: 'end',
          horizontal: true,
          distributed: true, // different color for each bar
        },
      },
      colors: ['#ffa726', '#fb8c00', '#f57c00', '#ef6c00'], // LPG-inspired oranges
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ['1.4kg LPG', '11kg LPG', '22kg LPG', '50kg LPG'],
        labels: {
          style: {
            colors: '#333',
            fontSize: '14px',
          },
        },
      },
      yaxis: {
        title: {
          text: 'Stock Quantity',
        },
      },
      title: {
        text: 'LPG Cylinder Inventory by Size',
        align: 'center',
        style: {
          fontSize: '18px',
          color: '#333',
        },
      },
    },
  });

  return (
    <div className="chart-container">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default Bar;
