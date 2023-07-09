const Table = () => {
    return (
      <div className="overflow-x-auto ">
        <table className="table bg-base-100  items-center text-center w-full h-full ">
          {/* head */}
          <thead>
            <tr>
              <th>Clase</th>
              <th>Límite Inferior</th>
              <th>Límite Superior</th>
              <th>Frecuencia absoluta</th>
              <th>Marca de clase</th>
              <th>Límite inferior exacto</th>
              <th>Límite Superior exacto</th>
              <th>Frecuencia acumulada</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <div className="font-bold">1</div>
              </th>
              <td>
                <div>
                  <div className="font-bold text-center">15°C</div>
                </div>
              </td>
              <td>23°C</td>
              <td>450</td>
              <td>30</td>
              <td>10</td>
              <td>30</td>
              <td>10</td>

            </tr>
            <tr>
              <th>
                <div className="font-bold">1</div>
              </th>
              <td>
                <div>
                  <div className="font-bold text-center">15°C</div>
                </div>
              </td>
              <td>23°C</td>
              <td>450</td>
              <td>30</td>
              <td>10</td>
              <td>30</td>
              <td>10</td>

            </tr>
          </tbody>
        </table>
      </div>
    );
  };

export default Table