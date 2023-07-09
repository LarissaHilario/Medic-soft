
import BarChart from "../grphics/BarChart";
import StadisticsData from "./StadisticsData";
import Table from "./Table";


const Sensor =()=>{
    return(
        <>
        <div className="divider border-black ">Temperatura</div>
                  <Table />
                  <div className="pb-10">
                    <div className="card w-[29rem] mt-1 bg-base-100 shadow-xl">
                      <div className="card-body">
                        <h2 className="card-title">Temperatura</h2>
                      </div>
                      <figure>
                        <BarChart />
                      </figure>
                    </div>
                  </div>
                  <div className="-mt-[25rem] ml-[20rem]">
                    <StadisticsData />
                  </div>
                  <div className=" ml-[20rem] p-1">
                    <StadisticsData />
                  </div>
                  
        </>
        
    )
}
export default Sensor