import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import {axiosInstance}  from "../Helpers/AxiosInstance";
import waves from "/waves.svg";
import image from "/logo.png";
import woman from "/doctor.png";
import Loader from "../components/Loader";


const SignUp = () => {
  const [loading, setLoading] = useState (false)
  const [state, setState] = useState({
    name: "",
    password: "",
    lastname: "",
  });

  const [avatar, setAvatar] = useState()

  const onOptionChange = e => {
    setAvatar(e.target.value)
    console.log(e.target.value)
  }

  const handleChangeValue = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
      [e.target.lastname]: value,
    });
  };

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("photos")
      .then(({ data }) => {
        console.log(data.message);
        setPosts(data.message);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const navigate = useNavigate();

  const handleChange = () => {
    navigate("/login");
  };

  
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const userData = {
      name: state.name,
      password: state.password,
      lastname: state.lastname,
      photoUrl: avatar
    };
    console.log(userData)
    await axiosInstance
      .post("create",userData
      )
      .then((resp) => {     
        const { data } = resp;
        console.log(data)
        navigate('/login')
      }) 
      .catch(({ response }) => {
        console.log(response.data.message);
      });
      
  }
 



  return (
    <>
      <div className="min-h-screen bg-base-100 overflow-hidden">
        <div className="flex-col flex items-center object-center ">
          <img src={image} className=" w-100 h-30 "></img>
        </div>
        <div className="flex w-full py-0">
          <div className="grid h-full w-full flex-grow card place-items-center mt-5 ">
            <div className="flex w-[50rem] h-full ml-20 flex justify-center ">
              <div className="grid bg-neutral artboard artboard-horizontal w-full rounded-3xl">
                <div className="form-control w-full max-w-xs flex justify-center">
                  <label className="label mt-10 ml-10">
                    <span className="label-text-bold font-bold ">
                      Selecciona un avatar
                    </span>
                  </label>
                  <div className="flex justify-center w-[42rem]">
                 
                    <div className="flex gap-8 ml-[3rem] p-5 w-full h-[200px] no-scrollbar overflow-x-scroll">
                      {posts.map((post) => (
                       <div key={post.toString()}>
                        <input
                            id={post.id}
                            type="radio"
                            className="hidden peer"
                            name="avatar"
                            required
                            value={post.photoUrl}
                            onChange={onOptionChange}
                          />
                          <label
                            htmlFor={post.id}
                            className="inline-flex items-center justify-center bg-accent rounded-full w-28 h-28 cursor-pointer  peer-checked:scale-110 peer-checked:bg-primary peer-checked:transform transition duration-500 hover:scale-110 hover:bg-primary hover:transform transition duration-500">
                            <img src={post.photoUrl} className="h-28"/>
                          </label>
                       </div>
                      ))}
                    </div>
                  </div>

                  <div className="-mt-20 w-[45rem] flex justify-center ">
                    <div className="">
                      <div>
                        <label className="label mt-10 ml-10">
                          <span className="label-text-bold font-bold">
                            Nombre de usuario
                          </span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Escribe aquí"
                          className=" mt-1 ml-10 input input-bordered w-full max-w-md"
                          required
                          value={state.name}
                          onChange={handleChangeValue}
                        />
                      </div>
                      <div>
                        <label className="label mt-4 ml-10">
                          <span className="label-text-bold font-bold ">
                            Apellido
                          </span>
                        </label>
                        <input
                          name="lastname"
                          type="text"
                          
                          placeholder="Escribe aquí"
                          className=" mt-1 ml-10 input input-bordered w-full max-w-md"
                          value={state.lastname}
                          onChange={handleChangeValue}
                        />
                      </div>
                      <div></div>

                      <div>
                        <label className="label mt-4 ml-10">
                          <span className="label-text-bold font-bold ">
                            Contraseña
                          </span>
                        </label>
                        <input
                          name="password"
                          type="password"
                          required
                          placeholder="Escribe aquí"
                          className=" mt-1 ml-10 input input-bordered w-full max-w-md"
                          value={state.password}
                          onChange={handleChangeValue}
                        />
                      </div>
                      <div>
                        <button className="btn btn-primary ml-10 mt-10  w-full max-w-md" onClick={handleSubmit }>
                          Crear Usuario
                        </button>
                        
                        <div className="divider ml-10 w-full">O</div>
                        <button
                          className="btn btn-primary ml-10 mb-10 w-full max-w-md"
                          onClick={handleChange}
                        >
                          Iniciar Sesión
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid h-full flex-grow card place-items-center mr-[15rem] ">
            <div className="w-[25rem]  py-32 ">
              <img src={woman} className=" " width='390px'></img>
            </div>
          </div>
        </div>
        <img src={waves} className="w-full -mt-[8.55rem]"></img>
      </div>
    </>
  );
};

export default SignUp;
