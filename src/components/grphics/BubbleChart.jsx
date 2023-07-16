import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";


const OxygenChart = ()=>{
  const weeklyOxygen = useSelector((state) => state.oxygenWeekly.oxygenWeekly.oxygenWeekly);
  console.log(weeklyOxygen)
  
  const labels = weeklyOxygen ? weeklyOxygen.map((item) => item.date) : [];
  const datos = weeklyOxygen ? weeklyOxygen.map((item) => item.value) : [];

  console.log(labels)
  console.log(datos)

  if (!weeklyOxygen) {
    return <div>No se encontraron datos</div>;
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Oxigenación",
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
        <Line options={options} data={data} width='400px' height='210px'/>
      </div>
    );
  };
  
  export default OxygenChart;
  