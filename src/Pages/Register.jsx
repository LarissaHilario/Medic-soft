//import Header from "../components/Header/Header";
import * as React from "react";
import { useState } from "react";
import Drawer from "../components/Drawer";
import Navbar from "../components/Navbar";

import Electro from "../components/progressiveLine";
//import {loader} from '../components/Loader'

const Register = () => {
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
                    <button type="submit" className="btn btn-primary w-full max-w-">
                      Guardar datos
                    </button>
                    </div>
                  </div>
                </div>
                <div className="grid  flex-grow place-items-center">
              
                
                    <div className="flex justify-center items-center bg-base-100  artboard  artboard-horizontal w-[60rem] h-[40rem] rounded-2xl">
                        <Electro></Electro>
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
