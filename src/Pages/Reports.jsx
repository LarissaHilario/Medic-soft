import Header from "../components/Header/Header";
import Search from "../components/Search";
import Table from "../components/Table";
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import TableInfo from "../components/TableInformes";
import Drawer from "../components/Drawer";
import Navbar from "../components/Navbar";

const Reports = () => {
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
                                Informes semanales
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
                                        <option>Fecha</option>
                                    </select>
                                </div>
                            </div>
                            <div className=" ml-9 mt-[-25rem] mr-4">
                                <TableInfo/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Reports;
