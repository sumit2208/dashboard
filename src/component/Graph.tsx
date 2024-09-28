import React from 'react';
import { Chart, registerables, TooltipItem } from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js components
Chart.register(...registerables);

const Graph: React.FC = () => {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'], // X-axis labels
    datasets: [
      {
        label: 'Maximum of focus',
        data: [40, 50, 65, 70, 55, 60, 80, 85], // Example data for maximum focus
        borderColor: 'rgb(255, 99, 132)', // Red line for maximum focus
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Area fill for maximum focus
        tension: 0.4, // Smooth line to allow curves to touch
        fill: true, // Fill under the line
        pointRadius: 6, // Larger points for emphasis
        pointBackgroundColor: 'white',
        pointBorderColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Lack of focus',
        data: [45, 60, 55, 65, 60, 70, 50, 60], // Example data for lack of focus
        borderColor: 'rgb(54, 162, 235)', // Blue line for lack of focus
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Area fill for lack of focus
        tension: 0.4, // Smooth line to allow curves to touch
        fill: true, // Fill under the line
        pointRadius: 6,
        pointBackgroundColor: 'white',
        pointBorderColor: 'rgb(54, 162, 235)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        title: {
          display: true,
          text: 'Focus Level',
          color: '#888',
        },
        ticks: {
          color: '#fff',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        suggestedMin: 30, // Adjust minimum value to ensure lines are centered and cross
        suggestedMax: 100, // Adjust maximum value to keep the lines within the view
      },
      x: {
        title: {
          display: true,
          text: 'Weeks',
          color: '#888',
        },
        ticks: {
          color: '#fff',
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#fff',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleFont: {
          size: 16,
        },
        bodyFont: {
          size: 14,
        },
        cornerRadius: 8,
        callbacks: {
          label: function (tooltipItem: TooltipItem<'line'>) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.formattedValue}`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full bg-transparent rounded-lg   p-6 h-80">
      <div className="flex justify-between mb-5 text-gray-400">
        <div className="grid gap-4 grid-cols-2">
          <div>
            <h5 className="inline-flex items-center text-gray-500 leading-none font-normal mb-2">
              Maximum Focus
            </h5>
            <p className="text-white text-2xl font-bold">85%</p>
          </div>
          <div>
            <h5 className="inline-flex items-center text-gray-500 leading-none font-normal mb-2">
              Lack of Focus
            </h5>
            <p className="text-white text-2xl font-bold">60%</p>
          </div>
        </div>
        <div>
          <select className="bg-transparent text-gray-400 p-2 rounded-lg">
            <option>Last week</option>
            <option>Last month</option>
            <option>Last year</option>
          </select>
        </div>
      </div>

      {/* Render Line Chart */}
      <Line data={data} options={options} height={400} />
    </div>
  );
};

export default Graph;
