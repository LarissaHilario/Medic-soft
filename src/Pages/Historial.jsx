import Header from "../components/Header/Header";
import Search from "../components/Search";
import Table from "../components/Table";
import Navbar from "../components/Navbar";
import Drawer from "../components/Drawer";
import { Navigate, useNavigate } from "react-router-dom";

const Historial = () => {
    const navigate = useNavigate()

    const handleNavigate =()=>{
       
        navigate('/registro')
    }
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
                                Historial
                            </div>
                            <div className="-mt-[6rem]">
                            <div className="-mt-[8rem] ml-11">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="input input-bordered w-80 input-primary "
                                    />
                                </div>
                                <div className="-mt-[3rem] ml-[24rem]">
                                    <select className="select select-bordered w-full max-w-xs select-primary">
                                        <option disabled selected>
                                            Filtros
                                        </option>
                                        <option>Temperatura</option>
                                        <option>Fecha</option>
                                        <option>Ritmo cardiaco</option>
                                        <option>Oxigenación</option>
                                    </select>
                                </div>
                                <div className="-mt-[3rem] ml-[45rem]">
                                    <button className="btn btn-outline btn-primary" onClick={handleNavigate}>
                                        Añadir registro
                                    </button>
                                </div>
                            </div>
                            <div className=" ml-9 mt-[-25rem] mr-4">
                                <Table></Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Historial;
