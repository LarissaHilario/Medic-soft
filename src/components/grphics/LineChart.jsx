import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

const LineChart = () => {
const weeklyPulse = useSelector((state) => state.weeklyPulse.weeklypulse.weeklypulse);
 const labels= weeklyPulse ? weeklyPulse.map(item => item.date) : [];
 const datos=  weeklyPulse ?  weeklyPulse.map(item => item.value) : [];
 if (!weeklyPulse) {
  return <div>No se encontraron datos</div>; // Muestra un mensaje cuando lastData es null o undefined
}

const data = {
  labels: labels,
  datasets: [
    {
      fill: true,
      label: "Ritmo Cardiaco",
      backgroundColor: "#4F7FFD",
      borderColor: "#1154FE",
      data: datos,
    },
  ],
};
const options = {
    responsive: true,
    redraw: true,
     maintainAspectRatio: false
    }

  return (
    <div>
      <Line options={options} data={data} width='400px' height='180px'/>
    </div>
  );
};

export default LineChart;
