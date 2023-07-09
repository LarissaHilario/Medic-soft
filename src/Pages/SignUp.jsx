import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import waves from "/waves.svg";
import image from "/logo.png";
import woman from "/woman.png";

const SignUp = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://192.168.100.195:9000/photos")
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
  return (
    <>
      <div className="min-h-screen bg-base-100 overflow-hidden">
        <div className="flex-col flex items-center object-center ">
          <img src={image} className=" w-100 h-30 "></img>
        </div>
        <div className="flex w-full py-0">
          <div className="grid h-full w-full flex-grow card place-items-center mt-5 ">
            <div className="flex w-[50rem] h-full ml-20 flex justify-center ">
              <div className="grid bg-neutral artboard artboard-horizontal  ml-20 w-full rounded-3xl">
                <div className="form-control w-full max-w-xs flex justify-center">
                  <label className="label mt-10 ml-10">
                    <span className="label-text-bold font-bold ">
                      Selecciona un avatar
                    </span>
                  </label>
                  <div className="flex justify-center w-[42rem]">
                    <div className="flex gap-8 ml-[2rem] p-5 w-full h-[200px] no-scrollbar overflow-x-scroll">
                      {posts.map((post) => (
                        <div className="avatar w-96 h-32" key={post.toString()}>
                          <input
                           id={post.id}
                            type="checkbox"
                            className="hidden peer"
                            required="requered"
                          />
                          <label
                            htmlFor={post.id}
                            className="inline-flex items-center justify-center bg-neutral rounded-full cursor-pointer  peer-checked:scale-110 peer-checked:bg-primary peer-checked:transform transition duration-500 hover:scale-110 hover:bg-primary hover:transform transition duration-500">
                            <img src={post.photoUrl} />
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="-mt-20 w-[40rem] flex justify-center">
                    <div className="">
                      <div>
                        <label className="label mt-10 ml-10">
                          <span className="label-text-bold font-bold">
                            Nombre de usuario
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Escribe aquí"
                          className=" mt-1 ml-10 input input-bordered w-full max-w-md"
                        />
                      </div>

                      <div>
                        <label className="label mt-4 ml-10">
                          <span className="label-text-bold font-bold ">
                            Contraseña
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Escribe aquí"
                          className=" mt-1 ml-10 input input-bordered w-full max-w-md"
                        />
                      </div>
                      <div>
                        <button className="btn btn-primary ml-10 mt-10  w-full max-w-md">
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
            <div className="w-[22rem] h-full py-8 ">
              <img src={woman} className=" "></img>
            </div>
          </div>
        </div>
        <img src={waves} className="w-full -mt-[1.8rem]"></img>
      </div>
    </>
  );
};

export default SignUp;
