// StackedBarChart.js

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StackedBarChart = () => {
  // Sample data
  const data = {
    labels: ['Fedha', 'Wendani', 'Githurai', 'Donholm', 'Saika'],
    datasets: [
      {
        label: 'Not Recalled',
        data: [50, 30, 70, 40, 60],
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        stack: 'stack1', // Specify stack name
      },
      {
        label: 'Recalled',
        data: [20, 10, 30, 15, 25],
        backgroundColor: 'green',
        borderColor: 'black',
        borderWidth: 1,
        stack: 'stack1', // Specify stack name
      },
    ],
  };

  const options = {
    indexAxis: 'y', // Horizontal bar chart
    responsive: true,
    scales: {
      x: {
        stacked: true, // Enable stacking on x-axis
        ticks: {
          beginAtZero: true, // Ensure the x-axis starts at zero
        },
      },
      y: {
        stacked: true, // Enable stacking on y-axis
      },
    },
    elements: {
      bar: {
        borderWidth: 1,
        barThickness: 20, // Set the thickness of the bars
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Medication Scans by Area',
      },
    },
  };

  return (
    <div>
      <Bar 
        data={data} 
        options={options} 
        width={300} // Set the width to 300 pixels
        height={200} // Set the height to 200 pixels
      />
    </div>
  );
};

export default StackedBarChart;