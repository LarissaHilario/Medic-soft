import Table from "../components/Table";
import Navbar from "../components/Navbar";
import Drawer from "../components/Drawer";
import {useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Historial = () => {
  const [cards, setCards] = useState([])
  const [recordatorio, setRecordatorio] = useState(true);
  const navigate = useNavigate()
  const [filter, setFilter] = useState('default');
  const history = useSelector((state) => state.history.history.history.history)
  console.log(history)
  const handleNavigate = () => {
    navigate('/registro')
  }
  const handleChange = e => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    setCards(history);
  }, [history]);

  const handleMonth = () => {
    return (
      axios.get('https://apipython.ddns.net/monthly-inform', {
        responseType: "blob",
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then(({ data }) => {
          const blob = new Blob([data], { type: "application/pdf" });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "InformeMensual.pdf";
          a.click();
          URL.revokeObjectURL(url);
        })
    )
  }


  const handleWeek = () => {
    return (
      axios.get('https://apipython.ddns.net/weekly-inform', {
        responseType: "blob",
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      })
        .then(({ data }) => {
          const blob = new Blob([data], { type: "application/pdf" });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "InformeSemanal.pdf";
          a.click();
          URL.revokeObjectURL(url);
        })
    )
  }

  const changeRecordatorio = () => {
    setRecordatorio(false)
  }



  const handleInput = e => {
    const input = e.target.value;
    if (!input) {
      // Si no se ha ingresado nada en el campo de búsqueda, mostrar todos los datos
      setCards(history);
    } else {
      switch (filter) {
        case 'temperature':
          setCards(
            history.filter((item) => item.temperature.toString().includes(input)
            ) || []
          );
          break;
        case 'pulse':
          setCards(
            history.filter(item => item.pulse.toString().includes(input)) || []
          );
          break;
        case 'oxygen':
          setCards(
            history.filter(item => item.oxygen.toString().includes(input)) || []
          );
          break;
        case 'date':
          setCards(
            history.filter(item => item.date.toString().includes(input)) || []
          );
          break;
        default:
          setCards([]); // Si no se selecciona ningún filtro o el filtro es inválido, muestra un array vacío
          break;

      }
    };
  }
  return (
    <>
      {recordatorio && (
        <div className="alert alert-info">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Recuerda imprimir tus informes semanales y mensuales</span>
          <button onClick={changeRecordatorio}>Cerrar</button>
        </div>
      )}
      <div className="flex w-full overflow-hidden">
        <div className="grid w-1flex-grow place-items-center">
          <Drawer />
        </div>
        <div className="grid h-20 mt-10 flex-grow place-items-center">
          <Navbar />
          <div className="flex w-full h-[51rem] ">
            <div className="grid bg-neutral  artboard  artboard-horizontal w-full h-full ">
              <div className=" flex collapse-title text-4xl font-bold p-10 h-1 ">
                Historial
              </div>
              <div className=" p-10 flex items-center gap-12">

                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-80 input-primary"
                  onChange={handleInput}
                />


                <select className="select select-bordered w-full max-w-xs select-primary"
                  value={filter}
                  onChange={handleChange}
                >
                  <option value="default" disabled>Filtros</option>
                  <option value='temperature'>Temperatura</option>
                  <option value='date'>Fecha</option>
                  <option value='pulse'>Ritmo cardiaco</option>
                  <option value='oxygen'>Oxigenación</option>
                </select>


                <button className="btn btn-outline btn-primary" onClick={handleNavigate}>
                  Añadir registro
                </button>
                <button className="btn btn-outline btn-primary" onClick={handleMonth} >
                  Imprimir informe mensual
                </button>
                <button className="btn btn-outline btn-primary" onClick={handleWeek}>
                  Imprimir informe semanal
                </button>

              </div>



              <Table data={cards}></Table>



            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Historial;
