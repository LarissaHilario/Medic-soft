import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado",  "Domingo"];

const data = {
  labels: labels,
  datasets: [
    {
      fill: true,
      label: "Ritmo Cardiaco",
      backgroundColor: "#4F7FFD",
      borderColor: "#1154FE",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};
const options = {
    responsive: true,
    redraw: true,
     maintainAspectRatio: false
    }

const LineChart = () => {
  return (
    <div>
      <Line options={options} data={data} width='400px' height='210px'/>
    </div>
  );
};

export default LineChart;
