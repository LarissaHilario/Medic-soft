import Header from "../components/Header/Header"
import * as React from 'react';
import { useState } from "react";
import Drawer from "../components/Drawer";
import Navbar from "../components/Navbar";

const Register = () => {
    const [day, setDay] = useState()
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
                            <div className="form-control w-full max-w-xs flex justify-center">
                                <label className="label ">
                                    <span className="label-text-bold font-bold ">Fecha</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Escribe aquí"
                                    className=" mt-1 ml-12 input input-bordered w-[22rem] max-w-md"
                                />
                                <label className="label ">
                                    <span className="label-text-bold font-bold ">Hora</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Escribe aquí"
                                    className=" mt-1 ml-12 input input-bordered w-[22rem] max-w-md"
                                />
                                <label className="label ">
                                    <span className="label-text-bold font-bold ">Temperatura</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Escribe aquí"
                                    className=" mt-1 ml-12 input input-bordered w-[22rem] max-w-md"
                                />
                                <label className="label">
                                    <span className="label-text-bold font-bold ">Oxigenación</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Escribe aquí"
                                    className=" mt-1 ml-12 input input-bordered w-[22rem] max-w-md"
                                />
                                <label className="label ">
                                    <span className="label-text-bold font-bold ">Ritmo cardiaco</span>
                                </label>
                                <input
                                id=""
                                    placeholder="Escribe aquí"
                                    className=" mt-1 ml-12 input input-bordered w-[22rem] max-w-md"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Register