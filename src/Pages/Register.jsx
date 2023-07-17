import * as React from "react";
import { useState } from "react";
import Drawer from "../components/Drawer";
import Navbar from "../components/Navbar";
import Electro from "../components/progressiveLine";
import { useEffect } from "react";

import io from "socket.io-client";
const Register = () => {
  const [temperature, setTemperature] = useState("");
  const [oxygenation, setOxygenation] = useState("");
  const [heartRate, setHeartRate] = useState("");
  const [socket, setSocket] = useState(null);   

 
      /*socket.on("data", (data) => {
        setTemperature(data.temperature);
        setHeartRate(data.pulse); 
        setOxygenation(data.oxygen);
  
      });*/    
  
      const [datosSensores, setDatosSensores] = useState({});

      useEffect(() => {
        // Establecer la conexión con el servidor socket
        const socket = new WebSocket('ws://192.168.100.243:4567');
    
        // Escuchar los mensajes recibidos desde el servidor
        socket.onmessage = (event) => {
          const datos = JSON.parse(event.data);
          setDatosSensores(datos);
        };
    
        // Manejar errores
        socket.onerror = (error) => {
          console.error('Error en la conexión del WebSocket:', error);
        };
    
        // Cerrar la conexión al desmontar el componente (opcional)
        return () => socket.close();
      }, []);

  


  const handleSubmit =async (e)=>{
    e.preventDefault();
    const sensorData = {
    temperature: temperature,
    pulse: heartRate,
    oxygen:oxygenation
  };
  console.log(sensorData)
  await axiosInstance
    .post("sensors",sensorData
    )
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
          <div className="flex w-full h-[51rem]">
            <div className="grid bg-neutral  artboard  artboard-horizontal w-full h-full">
              <div className=" flex collapse-title text-4xl font-bold p-10 h-1 ">
                Registro de signos vitales
              </div>
              <div className=" flex text-xl font-medium p-10 -mt-[2rem] h-1 ">
                Por favor, conecta los sensores para empezar a monitorear tu signos vitales
              </div>
              <div className="flex w-full">
                <div className="grid flex-grow  place-items-center">
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
                    
                    />
                    </div>
                    <div className="pb-5 pt-5 ml-12 w-[22rem]">
                    <button type="submit" className="btn btn-primary w-full max-w-" onClick={handleSubmit}>
                      Guardar datos
                    </button>
                    </div>
                  </div>
                </div>
                <div className="grid  flex-grow place-items-center">
                    <div className="flex justify-center items-center bg-base-100  artboard  artboard-horizontal w-[60rem] h-[40rem] rounded-2xl">
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
