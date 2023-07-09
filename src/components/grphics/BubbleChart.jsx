import React from "react";
import Chart from "chart.js/auto";
import { Bubble } from "react-chartjs-2";
import { faker } from '@faker-js/faker';


const BubbleChart = () => {
  //const labels = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado",  "Domingo"];
  const data = {
   
    datasets: [
        {
            label: 'Oxigenación',
            data: Array.from({ length: 50 }, () => ({
                x: faker.datatype.number({ min: -100, max: 100 }),
                y: faker.datatype.number({ min: -100, max: 100 }),
                r: faker.datatype.number({ min: 5, max: 20 }),
            })),
            backgroundColor: '#658FFE',
          }, 
    ],
    
  };

const options = {
    responsive: true,
    redraw: true,
     maintainAspectRatio: false,
    scales: {
        y: {
          beginAtZero: true,
        },
    }
}
    
  
  return (
    <div>
      <Bubble options={options} data={data} width='400px' height='250px'/>
    </div>
  );
};

export default BubbleChart;