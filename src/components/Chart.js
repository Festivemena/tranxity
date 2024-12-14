// components/Chart.js
"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Chart() {
  // Generate dummy data for daily disposal for a month
  const daysInMonth = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
  const dailyDisposalData = Array.from({ length: 30 }, () => Math.floor(Math.random() * 50) + 10); // Random kg values

  const data = {
    labels: daysInMonth,
    datasets: [
      {
        label: 'Daily Waste Disposal (kg)',
        data: dailyDisposalData,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        pointRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return ` ${context.dataset.label}: ${context.raw} kg`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Day of the Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Waste Disposal (kg)',
        },
        beginAtZero: true,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  return (
    <div className="relative w-full h-80 sm:h-96 lg:h-[500px]">
      <Line data={data} options={options} />
    </div>
  );
}
