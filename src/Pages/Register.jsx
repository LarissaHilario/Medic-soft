import * as React from "react";
import { useState } from "react";
import Drawer from "../components/Drawer";
import Navbar from "../components/Navbar";
import Electro from "../components/progressiveLine";
import { useEffect } from "react";
import io from "socket.io-client";
import image from '/doctor.png'
import Loader from "../components/Loader";
import LoaderComponent from "../components/Loader";
import { axiosInstancia } from "../Helpers/AxiosInstancia";
import axios from "axios";
import { useDispatch } from "react-redux";

const Register = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [temperature, setTemperature] = useState("");
  const [oxygenation, setOxygenation] = useState("");
  const [heartRate, setHeartRate] = useState("");
  const dispatch=useDispatch()

      useEffect(() => {
        const socket = io('ws://3.23.169.85:4000');
        socket.on('connect', () => {
        console.log('Connected to server');
        socket.send('¡Hola, servidor! Soy el cliente.');
        socket.send('¡Holaaaaaaaaaaaaaaaaaaaaaaa');
        socket.on("data",(data) => {
        console.log(data)
        const parsedData = JSON.parse(data);
        console.log(parsedData)
        setTemperature(parsedData.temperature);
        setHeartRate(parsedData.pulse); 
        setOxygenation(parsedData.oxygen);
        setIsLoading(false);
        })
      });
      return () => {
            socket.disconnect();
          };
        });


        
    

  const handleSubmit =async (e)=>{
    e.preventDefault();
    const sensorData = {
    temperature: temperature,
    pulse: heartRate,
    oxygen: oxygenation
  };
  console.log(sensorData)
  await axios.post("https://apipython.ddns.net/sensors",sensorData,{
    headers: {
      'Content-type': 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    },
  })
    
    .then((resp) => {     
      const { data } = resp;
      console.log(data)
     
      
    })

    .catch(({ response }) => {
      console.log(response.message);

    });
  }



  return (
    <>
      <div className="flex w-full overflow-hidden">
        <div className="grid w-1flex-grow place-items-center">
          <Drawer />
        </div>
        <div className="grid h-20 mt-10 flex-grow place-items-center">
          <Navbar />
          <div className="flex w-full h-[53rem]">
            <div className="grid bg-neutral  artboard  artboard-horizontal w-full h-full">
              <div className=" flex collapse-title text-4xl font-bold p-10 h-1 ">
                Registro de signos vitales
              </div>
              <div className=" flex text-xl font-medium p-10 -mt-[8rem] h-1 ">
                Por favor, conecta los sensores para empezar a monitorear tus signos vitales
              </div>
              <div className="flex w-full">
              <div className="grid flex-grow  place-items-center -mt-[10rem]">
                  <div className="form-control w-full max-w-xs flex justify-center">
                    <div className="pb-10">
  
                    <label className="label ">
                      <span className="label-text-bold font-bold ">
                        Temperatura
                      </span>
                    </label>
                    <input
                      disabled="disabled"
                      placeholder="Espera tus resultados en °C"
                      value={temperature}
                      className=" mt-1 ml-12 input input-bordered w-[22rem] max-w-md"
                    />
                    </div>
                    
                    <div className="pb-10">
                    <label className="label">
                      <span className="label-text-bold font-bold ">
                        Oxigenación
                      </span>
                    </label>
                    <input
                      disabled="disabled"
                      placeholder="Espera tus resultados"
                      className=" mt-1 ml-12 input input-bordered w-[22rem] max-w-md"
                      value={oxygenation}
                    />
                    </div>
                    
                    <div className="pb-10">
                    <label className="label ">
                      <span className="label-text-bold font-bold ">
                        Ritmo cardiaco
                      </span>
                    </label>
                    <input
                      disabled='disabled'
                      placeholder="Espera tus resultados"
                      className=" mt-1 ml-12 input input-bordered input-primary  w-[22rem] max-w-md"
                      value={heartRate}
                    />
                    </div>
                    <div className="pb-5 pt-5 ml-12 w-[22rem]">
                    <button type="submit" className="btn btn-primary w-full max-w-" onClick={handleSubmit}>
                      Guardar datos
                    </button>
                    </div>
                    </div>
                    </div>
                    <div className="grid  flex-grow place-items-center -mt-[10rem] ">
                    <div className="flex justify-center items-center bg-base-100  artboard  artboard-horizontal w-[40rem] h-[30rem] rounded-2xl">
                    {isLoading ? (
        <LoaderComponent />
      ) : (
        <>
        <div className="flex justify-center items-center bg-base-100  artboard  artboard-horizontal w-[40rem] h-[30rem] rounded-2xl">
          <img src={image}></img>
          </div>
          </>)}

                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
