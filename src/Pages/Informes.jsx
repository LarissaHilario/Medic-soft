import Header from "../components/Header/Header";
import Search from "../components/Search";
import Table from "../components/Table";
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import TableInfo from "../components/TableInformes";

const Informes = () => {
    return (
    <>
            <Header />
            <div className="flex sm:ml-[10px] md:ml-[344px] sm:mt-[10px] md:mt-[-830px] md:w-700 md:h-[830px]">
                <div className="grid bg-neutral  artboard  artboard-horizontal w-full h-full">
                    <div className=" flex collapse-title text-4xl font-bold p-10 h-1 ">
                        Informes
                    </div>
                    <div className=" flex form-control w-80 mt-[-200px] ml-9 ">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered w-80 input-primary "
                        />
                    </div>
                        <div className=" ml-9 mt-[-400px] mr-4 ">
                            <TableInfo/>
                        </div>
                    </div>
                </div>
            </>
            );
};

export default Informes;
