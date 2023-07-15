import Data from "../components/Data";
import Drawer from "../components/Drawer";
import Navbar from "../components/Navbar";

import LineChart from "../components/grphics/LineChart";

import BarChart from "../components/grphics/BarChart";
import OxygenChart from "../components/grphics/BubbleChart";
import RelationData from "../components/RelationData";

const Home = () => {
  return (
    <>
      <div className="flex w-full overflow-hidden">
        <div className="grid w-1flex-grow place-items-center">
          <Drawer />
        </div>
        <div className="grid h-20 mt-10 flex-grow place-items-center">
          <Navbar />
          <div className="flex w-full h-[51.8rem] ">
            <div className="grid bg-neutral  artboard  artboard-horizontal w-full h-full">
              <div className=" flex collapse-title text-4xl font-bold p-10 h-1 pt-8">
                Estadísticas
              </div>
              <div className="pl-10 pt-3">
                <Data/>
                </div>
                <div className="pl-10 p-8">
                  <div className="card w-[30rem] h-[31rem] bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title">Oxigenación</h2>
                      <RelationData title={'Moda'}/>
                      <RelationData title={'Moda'}/>
                    </div>
                    <figure>
                     <OxygenChart/>
                    </figure>
                    
                  </div>
                </div>
                <div className="-mt-[47rem] ml-[60rem] pr-10 pl-10 ">
                  <div className="card  bg-base-100 shadow-xl ">
                    <div className="card-body">
                      <h2 className="card-title">Temperatura</h2>
                      <RelationData title={'Moda'}/>
                      <RelationData title={'Moda'}/>
                    </div>
                    <figure>
                     <BarChart/>
                    </figure>
                  </div>
                </div>
                <div className="p-12 -mt-[36rem] ml-[30.5rem]">
                  <div className="card w-[28rem] h-[31rem] bg-base-100 shadow-xl ">
                    <div className="card-body">
                      <h2 className="card-title">Ritmo cardiaco</h2>
                      <RelationData title={'Moda'}/>
                      <RelationData title={'Moda'}/>
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
