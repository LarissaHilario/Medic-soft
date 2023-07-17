import React, { useMemo, useRef } from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

const BarChart = () => {
 const weeklyTemp = useSelector((state) => state.weeklyTemps.weeklyTemp.weeklyTemp);
 console.log(weeklyTemp)
 const labels= weeklyTemp ? weeklyTemp.map(item => item.date) : [];
 const datos=  weeklyTemp ?  weeklyTemp.map(item => item.value) : [];


 const dato={
  labels: [],
    datasets: [
      {
        label: "Temperatura",
        backgroundColor: "#4F7FFD",
        borderColor: "rgb(255, 99, 132)",
        data: [0,0,0],
      },
      
    ],
    redraw: true

}

 const data = {
  labels: labels,
  datasets: [
    {
      label: "Temperatura",
      backgroundColor: "#4F7FFD",
      borderColor: "rgb(255, 99, 132)",
      data: datos,
    },
    
  ],
  redraw: true
};

  const options = {
  responsive: true,
  redraw: true,
   maintainAspectRatio: false
  }

 if (!weeklyTemp) {
  return <div>
  <Bar options={options} data={dato} width='400px' height='470px' />
</div> // Muestra un mensaje cuando lastData es null o undefined
}






  
  
  return (
    <div>
      <Bar options={options} data={data} width='400px' height='470px' />
    </div>
  );
};

export default BarChart;