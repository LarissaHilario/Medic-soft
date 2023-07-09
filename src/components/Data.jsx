import Icon from "@mdi/react";
import { mdiThermometer } from "@mdi/js";
import { mdiHeartPulse } from "@mdi/js";
import { mdiChartBubble } from "@mdi/js";

const Data =()=>{
    return(
        <div className="card w-[50.5rem] bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Tus últimos datos</h2>
                    <div className="stats shadow">
                      <div className="stat overflow-hidden">
                        <div className="stat-figure text-primary">
                          <Icon path={mdiThermometer} size={2} />
                        </div>
                        <div className="stat-title">Temperatura</div>
                        <div className="stat-value text-primary">25.6°C</div>
                      </div>

                      <div className="stat">
                        <div className="stat-figure text-secondary">
                          <Icon path={mdiHeartPulse} size={2} />
                        </div>
                        <div className="stat-title">Ritmo Cardiaco</div>
                        <div className="stat-value text-secondary">2.6PPM</div>
                      </div>

                      <div className="stat">
                        <div className="stat-figure text-primary">
                          <Icon path={mdiChartBubble} size={2} />
                        </div>

                        <div className="stat-title">Oxigenación</div>
                        <div className="stat-value text-primary">86SPO2</div>
                      </div>
                    </div>
                  </div>
                </div>
    )
}

export default Data