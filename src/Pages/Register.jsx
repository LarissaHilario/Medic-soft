//import Header from "../components/Header/Header";
import * as React from "react";
import { useState } from "react";
import Drawer from "../components/Drawer";
import Navbar from "../components/Navbar";
import LineChart from "../components/progressiveLine";
import Line from "../components/Line";
import Lines from "../components/Line";
//import {loader} from '../components/Loader'

const Register = () => {
  const [day, setDay] = useState();
  return (
    <>
      <div className="flex w-full overflow-hidden">
        <div className="grid w-1flex-grow place-items-center">
          <Drawer />
        </div>
        <div className="grid h-20 mt-10 flex-grow place-items-center">
          <Navbar />
          <div className="flex w-full h-[51rem] ">
            
            <div className="grid bg-neutral  artboard  artboard-horizontal w-full h-full">

              <div className=" flex collapse-title text-4xl font-bold p-10 h-1 ">
                Registro de signos vitales
              </div>
              <div className=" flex text-xl font-medium p-10 -mt-[8rem] h-1 ">
                Por favor, conecta los sensores para empezar a monitorear tu signos vitales
              </div>
             
              <div className="flex w-full">
                <div className="grid -ml-[15rem] -mt-[10rem] flex-grow  place-items-center">
                  <div className="form-control w-full max-w-xs flex justify-center">
                    <div className="pb-5">
                       <label className="label ">
                      <span className="label-text-bold font-bold  " >Fecha</span>
                    </label>
                    <input
                      disabled="disabled"
                      placeholder="dd/mm/aa"
                      className=" mt-1 ml-12 input input-bordered w-[22rem] max-w-md"
                    /> 
                    </div>

                    <div className="pb-5">
                    <label className="label ">
                      <span className="label-text-bold font-bold ">Hora</span>
                    </label>
                    <input
                      disabled="disabled"
                      placeholder="12:00:00"
                      className=" mt-1 ml-12 input input-bordered w-[22rem] max-w-md disabled:input-bordered"
                    />
                    </div>

                    <div className="pb-5">
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
                    
                    <div className="pb-5">
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
                    
                    <div className="pb-5">
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
                  </div>
                </div>
                <div className="grid -mt-[10rem] flex-grow place-items-center">
              
                      
                    <div className="flex justify-center items-center -mr-[15rem] bg-base-100  artboard  artboard-horizontal w-[35rem] h-[33rem] rounded-2xl">
                        <LineChart/>
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
