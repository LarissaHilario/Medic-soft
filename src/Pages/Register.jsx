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
            <Header title={'Registro de datos médicos'}
                description={
                    <div className="top-20">

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker', 'DatePicker']}>
                                <DatePicker label="Fecha" readOnly 
                                sx={{width: '20%'}}
                                value={day}
                                />
                            </DemoContainer>

                            <TimePicker label='Hora' readOnly sx={{
                                width: '20%'
                            }} />

                        </LocalizationProvider>
                        <div>
                            <input type="text" placeholder="Temperatura" className="input input-bordered w-full max-w-xs" disabled >
                            </input>
                        </div>
                        <div>
                            <input type="text" placeholder="Oxigenación" className="input input-bordered w-full max-w-xs" disabled />
                        </div>
                        <div>
                            <input type="text" placeholder="Ritmo cardiaco" className="input input-bordered w-full max-w-xs" disabled />
                        </div>

                    </div>


                }


            >
            </Header >

        </>
    )
}

export default Register