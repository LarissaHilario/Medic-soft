const TableInfo = () => {
    return (
      <div className="overflow-x-auto h-full">
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
                <button className="btn btn-ghost btn-xs" onClick={() => window.my_modal_1.showModal()}>Detalles</button>
                <dialog id="my_modal_1" className="modal">
                  <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Paciente: Aylin Malpica</h3>
                    <p className="py-4">
                     FECHA: 14/06/2023 HORA:20:00
                    </p>
                    <p className="py-4">
                     Temperatura: 27
                    </p>
                    <p className="py-4">
                     Temperatura: 27
                    </p>
                    <p className="py-4">
                     Temperatura: 27
                    </p>
                    <div className="modal-action">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </div>
                  </form>
                </dialog>
              </th>
              <th>
                <button className="btn btn-ghost btn-xs">Imprimir</button>
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
  