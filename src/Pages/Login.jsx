import image from "/logo.png";
import wave from "/waves.svg"
import avatar from "/avatar1.svg"
import { useNavigate } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';



const Login = () => {
const navigate= useNavigate()
const submit=()=>{
  navigate('/crearCuenta')
}
  return (
    <>
      <div className="min-h-screen bg-base-100 overflow-hidden">
        <div className="flex-col flex items-center  mt-5 object-center ">
          <img src={image} className="w-100 h-30 "></img>
        </div>
        <div className="flex justify-center">
          <div className="flex  gap-8 mt-[2rem] p-9 w-[42%] h-[390px] no-scrollbar overflow-x-scroll">
            <div className="avatar ">
              <button htmlFor="login" onClick={() => window.login.showModal()} className=" snap-center w-[221px] h-[221px] bg-neutral rounded-full btn-outline btn-primary transform transition duration-500 hover:scale-110 " >
                <img src={avatar} />
                <div>
                  <label className="font-bold text-4xl p-10">Aylin</label>
                </div>
              </button>
            </div>

            <dialog id="login" className="modal">
              <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <div className="flex-col flex items-center  mt-2 object-center ">
                  <img src={image} className="w-60 h-30 "></img>
                </div>
                <div className="avatar flex justify-center ">
                  <button className="snap-center w-[190px] h-[190px] bg-base-100 rounded-full  " disabled="disabled">
                    <img src={avatar} />
                    <div>
                      <label className="font-bold text-4xl p-10 text-primary">Aylin</label>
                    </div>
                  </button>
                </div>
                <div>
                  <div className="form-control w-full max-w-xs flex justify-center">
                    <label className="label mt-10 ml-12">
                      <span className="label-text-bold font-bold ">Contraseña</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Escribe aquí"
                      className=" mt-1 ml-12 input input-bordered w-[22rem] max-w-md"
                    />
                  </div>
                  <div className="z-10">
                    <button type="submit" className="btn btn-primary ml-12 mt-10 mb-10 w-3/4 max-w-md">
                      Iniciar Sesión
                    </button>
                  </div>
                </div>
              </form>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>

          <div className="flex justify-center ml-5 mt-[4.5rem]">
            <button className="w-[221px] h-[221px]  rounded-full btn-primary transform transition duration-500 hover:scale-110 " onClick={submit}>
              <Icon path={mdiPlus} size={9} />
            </button>
          </div>
        </div>

        <div className="w-full pt-[13.3rem]  overflow-hidden">
          <img src={wave} className=" w-full h-full"></img>
        </div>
      </div>

    </>

  );
};

export default Login;
