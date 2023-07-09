import Data from "./Data"
import Icon from "@mdi/react";
import { mdiThermometer } from "@mdi/js";
import { mdiHeartPulse } from "@mdi/js";
import { mdiChartBubble } from "@mdi/js";

const Table = () => {
  return (
    <div className="overflow-x-auto h-full">
      <table className="table bg-base-100 top-10 items-center text-center  ">
        {/* head */}
        <thead>
          <tr>
            <th>Día</th>
            <th>Hora</th>
            <th>Temperatura</th>
            <th>Oxígenación</th>
            <th>Ritmo cardiaco</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>
              <div className="font-bold">Junio 14, 2023</div>

              <div className="text-sm opacity-50">Hace 12 días</div>
            </th>
            <td>
              <div>
                <div className="font-bold text-center">15:30</div>
              </div>
            </td>
            <td>23°</td>
            <td>450</td>
            <td>300</td>
            <th>
              <button className="btn btn-ghost btn-xs" onClick={() => window.my_modal_1.showModal()}>Detalles</button>
              <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box">
                  <h3 className="font-black text-2xl text-primary eading-loose">Paciente: Aylin Malpica</h3>
                  <div className="pt-4 pb-4">
                    <label className=" px-11">
                    FECHA: 14/06/2023
                  </label>
                  <label className=" px-11 ">
                    Hora: 00:00
                  </label>
                  </div>
                  
                  <div className="stats stats-vertical shadow">
                    <div className="stat">
                      <div className="stat-title">Temperatura</div>
                      <div className="stat-value">25°C</div>
                      <div className="stat-figure text-primary">
                          <Icon path={mdiThermometer} size={2} />
                        </div>
                    </div>

                    <div className="stat">
                      <div className="stat-title">Oxigenación</div>
                      <div className="stat-value">4,200</div>
                      <div className="stat-figure text-primary">
                          <Icon path={mdiChartBubble} size={2} />
                        </div>
                    </div>

                    <div className="stat">
                      <div className="stat-title">Ritmo Cardiaco</div>
                      <div className="stat-value">1,200</div>
                      <div className="stat-figure text-secondary">
                          <Icon path={mdiHeartPulse} size={2} />
                        </div>
                    </div>

                  </div>
                  <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Cerrar</button>
                  </div>
                </form>
              </dialog>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
