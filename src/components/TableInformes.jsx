import { useNavigate } from "react-router-dom";
import Sensor from "./Report/InfoPorSensor";
import StadisticsData from "./Report/StadisticsData";
import Table from "./Report/Table";
import BarChart from "./grphics/BarChart";
import LineChart from '../components/grphics/LineChart'
import BubbleChart from '../components/grphics/BubbleChart'
import { PDFViewer } from '@react-pdf/renderer';
import OxygenChart from "../components/grphics/BubbleChart";




const TableInfo = () => {
  const navigate= useNavigate()
  const submit =()=>{
    navigate('/document')

  }
  const name = localStorage.getItem('nombre')
  const lastname=localStorage.getItem('apellido')
  return (
    <div className="overflow-y-auto h-full">
      <table className="table bg-base-100 top-10 items-center text-center ">
        {/* head */}
        <thead>
          <tr>
            <th>Periodo</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>
              <div className="font-bold">Junio 18, 2023 - Junio 24, 2023</div>
              <div className="text-sm opacity-50">Semana 7</div>
            </th>
            <th>
              <button
                className="btn btn-ghost btn-xs"
                onClick={() => window.my_modal_1.showModal()}
              >
                Detalles
              </button>
              <dialog id="my_modal_1" className="modal overflow-y-auto">
                <form method="dialog" className="bg-base-100 rounded-lg p-5 ">
                  <h3 className="font-black text-2xl pt-5 text-primary eading-loose">
                    Paciente: {name} {lastname}
                  </h3>
                  <div className="pt-4 pb-4">
                    <label className="px-11 text-lg">Periodo: 14/06/2023</label>
                  </div>
                 <Sensor
                 type={'Temperatura'}
                 graphic={<BarChart/>}/>
                 <div className="pt-[8rem]">
                   <Sensor
                   type={'Ritmo Cardiaco'}
                   graphic={<LineChart></LineChart>}/>
                 </div>
                
                 <div className="pt-[8rem]">
                   <Sensor
                   type={'Oxigenación'}
                   graphic={<OxygenChart/>}
                   />
                 </div>

                  <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn" >Cerrar</button>
                  </div>
                </form>
              </dialog>
            </th>
            <th>
              <button className="btn btn-ghost btn-xs" onClick={submit}>Imprimir</button>
            </th>
          </tr>
        </tbody>
        {/* foot */}
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default TableInfo;
