import Header from "../components/Header/Header";
import Search from "../components/Search";
import Table from "../components/Table";
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';


const Historial = () => {
    return (
    <>
            <Header />
            <div className="flex sm:ml-[10px] md:ml-[344px] sm:mt-[10px] md:mt-[-830px] md:w-700 md:h-[830px]">
                <div className="grid bg-neutral  artboard  artboard-horizontal w-full h-full">
                    <div className="collapse-title text-4xl font-bold p-10 h-5 ">
                        Historial
                    </div>
                    <div className="form-control w-80 mt-[-130px] ml-9 h-15 ">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered w-80 input-primary "
                        />
                    </div>
                    <div className="form-control w-80 mt-[-280px] ml-[400px] h-15">
                        <select className="select select-bordered w-full max-w-xs select-primary">
                            <option disabled selected>Filtros</option>
                            <option>Temperatura</option>
                            <option>Fecha</option>
                            <option>Ritmo cardiaco</option>
                            <option>Oxigenación</option>
                        </select>
                        </div>
                        <div className=" w-30 mt-[-430px] ml-[850px] ">
                            <button className="btn btn-outline btn-primary">Añadir registro</button>
                        </div>
                        <div className="ml-9 mt-[-500px] mr-4 ">
                            <Table></Table>
                        </div>
                    </div>
                </div>
            </>
            );
};

            export default Historial;
