import { useSelector } from "react-redux";

const AllData =()=>{
  const allData = useSelector((state) => state.allData.allData);

  if (!allData) {
    return(
    <div className="card w-[20rem] bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title">Total de datos</h2>
                      <div className="stats stats-vertical shadow">
                        <div className="stat">
                          <div className="stat-title">Temperaturas</div>
                          <div className="stat-value">0</div>
                          <div className="stat-desc">↗datos tomados</div>
                        </div>

                        <div className="stat">
                          <div className="stat-title">Ritmo cardiaco</div>
                          <div className="stat-value">0</div>
                          <div className="stat-desc">↗datos tomados</div>
                        </div>

                        <div className="stat">
                          <div className="stat-title">Oxigenación</div>
                          <div className="stat-value">0</div>
                          <div className="stat-desc">↗datos tomados</div>
                        </div>
                      </div>
                    </div>
                  </div>
    ) // Muestra un mensaje cuando lastData es null o undefined
  }

  // Accede a las propiedades del estado lastData, como la temperatura

  const oxygenn = allData.allData.oxygen
  const pulse = allData.allData.pulse
  const temperatures= allData.allData.temperature


    return(
        <div className="card w-[20rem] bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title">Total de datos</h2>
                      <div className="stats stats-vertical shadow">
                        <div className="stat">
                          <div className="stat-title">Temperaturas</div>
                          <div className="stat-value">{temperatures}</div>
                          <div className="stat-desc">↗datos tomados</div>
                        </div>

                        <div className="stat">
                          <div className="stat-title">Ritmo cardiaco</div>
                          <div className="stat-value">{pulse}</div>
                          <div className="stat-desc">↗datos tomados</div>
                        </div>

                        <div className="stat">
                          <div className="stat-title">Oxigenación</div>
                          <div className="stat-value">{oxygenn}</div>
                          <div className="stat-desc">↗datos tomados</div>
                        </div>
                      </div>
                    </div>
                  </div>
    )
}

export default AllData