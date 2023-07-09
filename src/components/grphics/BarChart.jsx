import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const labels = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado",  "Domingo"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Temperatura",
        backgroundColor: "#4F7FFD",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
      
    ],
    redraw: true
  };

    const options = {
    responsive: true,
    redraw: true,
     maintainAspectRatio: false
    }
  
  return (
    <div>
      <Bar options={options} data={data} width='400px' height='350px'/>
    </div>
  );
};

export default BarChart;