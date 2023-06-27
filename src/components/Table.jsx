const Table = () => {
    return (
        <div className="overflow-x-auto h-full">
            <table className="table bg-base-100 top-10 items-center text-center ">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                          Día
                        </th>
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
                            
                            <div className="font-bold" >Junio 14, 2023</div>
                            
                            <div className="text-sm opacity-50">Hace 12 días</div>
                            
                        </th>
                        <td>
                            
                                <div>
                                    <div className="font-bold text-center">15:30</div>
                                </div>
                            
                        </td>
                        <td>
                            23°
                        </td>
                        <td>450</td>
                        <td>
                            300
                        </td>
                        <th>
                            <button className="btn btn-ghost btn-xs">Detalles</button>
                        </th>
                    </tr>
                   
                </tbody>
                {/* foot */}
                <tfoot>
                </tfoot>

            </table>
        </div>
    )
}

export default Table