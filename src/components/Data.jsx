import Icon from "@mdi/react";
import { mdiThermometer } from "@mdi/js";
import { mdiHeartPulse } from "@mdi/js";
import { mdiChartBubble } from "@mdi/js";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {axiosInstancia} from '../Helpers/AxiosInstancia'

const Data =()=>{

  const lastData = useSelector((state) => state.lastData.lastData);
  console.log(lastData)
  if (!lastData) {
    return <div>No se encontraron datos</div>; // Muestra un mensaje cuando lastData es null o undefined
  }

  // Accede a las propiedades del estado lastData, como la temperatura
  const temperature = lastData.lastData.temperature;
  const oxygen=lastData.lastData.oxygen;
  const pulse = lastData.lastData.pulse;
  console.log(temperature)


    return(
        <div className="card w-[50.5rem] bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Tus últimos datos</h2>
                    <div className="stats shadow">
                      <div className="stat overflow-hidden">
                        <div className="stat-figure text-primary">
                          <Icon path={mdiThermometer} size={2}/>
                        </div>
                        <div className="stat-title">Temperatura</div>
                        <div className="stat-value text-primary">{temperature}°C</div>
                      </div>

                      <div className="stat">
                        <div className="stat-figure text-secondary">
                          <Icon path={mdiHeartPulse} size={2} />
                        </div>
                        <div className="stat-title">Ritmo Cardiaco</div>
                        <div className="stat-value text-secondary">{pulse}PPM</div>
                      </div>

                      <div className="stat">
                        <div className="stat-figure text-primary">
                          <Icon path={mdiChartBubble} size={2} />
                        </div>

                        <div className="stat-title">Oxigenación</div>
                        <div className="stat-value text-primary">{oxygen}SPO2</div>
                      </div>
                    </div>
                  </div>
                </div>
    )
}

export default Data