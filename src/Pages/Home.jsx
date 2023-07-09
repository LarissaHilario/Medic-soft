import AllData from "../components/AllData";
import Data from "../components/Data";
import Drawer from "../components/Drawer";
import Navbar from "../components/Navbar";
import BubbleChart from "../components/grphics/BubbleChart";
import LineChart from "../components/grphics/LineChart";

import BarChart from "../components/grphics/BarChart";

const Home = () => {
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
                Estadísticas
              </div>
              <div className="pl-10">
                <Data/>
                </div>
                <div className="pl-[2.5rem]">
                  <AllData/>
                </div>
                <div className="pl-10 -mt-[28.5rem] ml-[21.5rem]">
                  <div className="card w-[29rem]  bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title">Temperatura</h2>
                    </div>
                    <figure>
                     <BarChart/>
                    </figure>
                  </div>
                </div>
                <div className="-mt-[42.8rem] ml-[55rem] pr-10">
                  <div className="card w-full  bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title">Oxigenación</h2>
                    </div>
                    <figure>
                     <BubbleChart/>
                    </figure>
                  </div>
                </div>
                <div className="-mt-[22rem] ml-[55rem] pr-10">
                  <div className="card w-full  bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title">Ritmo cardiaco</h2>
                    </div>
                    <figure>
                     <LineChart/>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    </>
  );
};

export default Home;
