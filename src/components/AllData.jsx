
const AllData =()=>{
    return(
        <div className="card w-[20rem] bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title">Total de datos</h2>
                      <div className="stats stats-vertical shadow">
                        <div className="stat">
                          <div className="stat-title">Temperaturas</div>
                          <div className="stat-value">319</div>
                          <div className="stat-desc">↗datos tomados</div>
                        </div>

                        <div className="stat">
                          <div className="stat-title">Ritmo cardiaco</div>
                          <div className="stat-value">4,200</div>
                          <div className="stat-desc">↗datos tomados</div>
                        </div>

                        <div className="stat">
                          <div className="stat-title">Oxigenación</div>
                          <div className="stat-value">1,200</div>
                          <div className="stat-desc">↗datos tomados</div>
                        </div>
                      </div>
                    </div>
                  </div>
    )
}

export default AllData