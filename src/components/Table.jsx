import Icon from "@mdi/react";
import { mdiThermometer } from "@mdi/js";
import { mdiHeartPulse } from "@mdi/js";
import { mdiChartBubble } from "@mdi/js";
import { useSelector } from "react-redux";

const Table = ({data}) => {
  const name= localStorage.getItem('nombre')
  const lastname= localStorage.getItem('apellido')

 
  return (
    <div className="overflow-x-auto p-10">
      <table className="table bg-base-100 top-1 items-center text-center  ">
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
          {data.map(row => (
  
          <tr key={row.id}>
            <th>
              <div className="font-bold">{row.date}</div>
            </th>
            <td>
              <div>
                <div className="font-bold text-center">{row.time}</div>
              </div>
            </td>
            <td>{row.temperature}</td>
            <td>{row.oxygen}</td>
            <td>{row.pulse}</td>
            <th>
              <button className="btn btn-ghost btn-xs" onClick={() => window[`my_modal_${row.id}`].showModal()}>Detalles</button>
              <dialog id={`my_modal_${row.id}`} className="modal">
                <form method="dialog" className="modal-box">
                  <h3 className="font-black text-2xl text-primary eading-loose">Paciente: {name} {lastname}</h3>
                  <div className="pt-4 pb-4">
                    <label className=" px-11">
                    {row.date}
                  </label>
                  <label className=" px-11 ">
                    Hora: {row.time}
                  </label>
                  </div>
                  
                  <div className="stats stats-vertical shadow">
                    <div className="stat">
                      <div className="stat-title">Temperatura</div>
                      <div className="stat-value">{row.temperature}°C</div>
                      <div className="stat-figure text-primary">
                          <Icon path={mdiThermometer} size={2} />
                        </div>
                    </div>

                    <div className="stat">
                      <div className="stat-title">Oxigenación</div>
                      <div className="stat-value">{row.oxygen}</div>
                      <div className="stat-figure text-primary">
                          <Icon path={mdiChartBubble} size={2} />
                        </div>
                    </div>

                    <div className="stat">
                      <div className="stat-title">Ritmo Cardiaco</div>
                      <div className="stat-value">{row.pulse}</div>
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
          </tr>))}
          
        </tbody>
      </table>
    </div>
  );
};

export default Table;
