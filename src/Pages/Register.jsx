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
                            <div className="-mt-[6rem]">
                            <div className="-mt-[8rem] ml-11">
                                    
                                <div className="-mt-[3rem] ml-[24rem]">
                                    <input></input>
                                </div>
                            </div>
                            <div className=" ml-9 mt-[-25rem] mr-4">
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default Register