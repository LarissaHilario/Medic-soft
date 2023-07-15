import Header from "../components/Header/Header";
import Search from "../components/Search";
import Table from "../components/Table";
import Navbar from "../components/Navbar";
import Drawer from "../components/Drawer";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Historial = () => {
    const [cards, setCards]= useState([])
    const navigate = useNavigate()
    const [filter, setFilter] = useState('default');
    const history = useSelector((state)=> state.history.history.history.history)
    console.log(history)
    const handleNavigate =()=>{
        navigate('/registro')
    }
    const handleChange = e => {
        setFilter(e.target.value);
      };

      useEffect(() => {
        setCards(history);
      }, [history]);

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
            console.log('hola'+setCards)
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
                                

                                    <button className="btn btn-outline btn-primary" >
                                        Imprimir informe mensual
                                    </button>
                               
                               
                                    <button className="btn btn-outline btn-primary" >
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
