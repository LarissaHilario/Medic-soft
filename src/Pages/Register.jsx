import Header from "../components/Header/Header"
import * as React from 'react';
import { useState } from "react";
const Register = () => {
    const [day, setDay] = useState() 
    return (
        <>
         <Header />
            <div className="flex sm:ml-[10px] md:ml-[344px] sm:mt-[10px] md:mt-[-830px] md:w-700 md:h-[830px]">
                <div className="grid bg-neutral  artboard  artboard-horizontal w-full h-full">
                    <div className=" flex collapse-title text-4xl font-bold p-10 h-1 ">
                        Registro de datos médicos
                    </div>
                    
                    </div>
                </div>
        </>
    )
}

export default Register