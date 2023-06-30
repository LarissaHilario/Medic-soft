import Header from "../components/Header/Header"
import * as React from 'react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react";
const Register = () => {
    const [day, setDay] = useState() 
    return (
        <>
         <Header />
            <div className="flex sm:ml-[10px] md:ml-[344px] sm:mt-[10px] md:mt-[-830px] md:w-700 md:h-[830px]">
                <div className="grid bg-neutral  artboard  artboard-horizontal w-full h-full">
                    <div className=" flex collapse-title text-4xl font-bold p-10 h-1 ">
                        Registro
                    </div>
                    
                    </div>
                </div>
        </>
    )
}

export default Register