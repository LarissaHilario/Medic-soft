import waves from "/waves.svg";
import image from "/logo.png";
import woman from "/woman.png";
import avatar from "/avatar1.svg";

const SignUp = () => {
  return (
    <>
      <div className="min-h-screen bg-base-100 overflow-hidden">
        <div className="flex-col flex items-center  mt-5 object-center ">
          <img src={image} className=" w-100 h-30 "></img>
        </div>
        <div className="flex w-full">
          <div className="grid h-full w-full flex-grow card place-items-center mt-5 ">
            <div className="flex w-[50rem] h-full ml-20 flex justify-center ">
              <div className="grid bg-neutral artboard artboard-horizontal  ml-20 w-full h-full rounded-3xl">
                <div className="form-control w-full max-w-xs flex justify-center">
                  <label className="label mt-10 ml-10">
                    <span className="label-text-bold font-bold ">Selecciona un avatar</span>
                  </label>
                  <div className="flex justify-center w-[42rem]">
                    <div className="flex gap-8 ml-[2rem] p-10 w-full h-[200px] no-scrollbar overflow-x-scroll">
                      <div className="avatar ">
                        <button className=" snap-center w-[80px] h-[80px] bg-neutral rounded-full btn-outline btn-primary transform transition duration-500 hover:scale-110 ">
                          <img src={avatar} />
                        </button>
                      </div>
                      <div className="avatar ">
                        <button className=" snap-center w-[80px] h-[80px] bg-neutral rounded-full btn-outline btn-primary transform transition duration-500 hover:scale-110 ">
                          <img src={avatar} />
                        </button>
                      </div>
                      <div className="avatar ">
                        <button className=" snap-center w-[80px] h-[80px] bg-neutral rounded-full btn-outline btn-primary transform transition duration-500 hover:scale-110 ">
                          <img src={avatar} />
                        </button>
                      </div>
                      <div className="avatar ">
                        <button className=" snap-center w-[80px] h-[80px] bg-neutral rounded-full btn-outline btn-primary transform transition duration-500 hover:scale-110 ">
                          <img src={avatar} />
                        </button>
                      </div>
                      <div className="avatar ">
                        <button className=" snap-center w-[80px] h-[80px] bg-neutral rounded-full btn-outline btn-primary transform transition duration-500 hover:scale-110 ">
                          <img src={avatar} />
                        </button>
                      </div>
                      <div className="avatar ">
                        <button className=" snap-center w-[80px] h-[80px] bg-neutral rounded-full btn-outline btn-primary transform transition duration-500 hover:scale-110 ">
                          <img src={avatar} />
                        </button>
                      </div>
                      <div className="avatar ">
                        <button className=" snap-center w-[80px] h-[80px] bg-neutral rounded-full btn-outline btn-primary transform transition duration-500 hover:scale-110 ">
                          <img src={avatar} />
                        </button>
                      </div>
                      <div className="avatar ">
                        <button className=" snap-center w-[80px] h-[80px] bg-neutral rounded-full btn-outline btn-primary transform transition duration-500 hover:scale-110 ">
                          <img src={avatar} />
                        </button>
                      </div>
                      <div className="avatar ">
                        <button className=" snap-center w-[80px] h-[80px] bg-neutral rounded-full btn-outline btn-primary transform transition duration-500 hover:scale-110 ">
                          <img src={avatar} />
                        </button>
                      </div>
                      <div className="avatar ">
                        <button className=" snap-center w-[80px] h-[80px] bg-neutral rounded-full btn-outline btn-primary transform transition duration-500 hover:scale-110 ">
                          <img src={avatar} />
                        </button>
                      </div>
                      <div className="avatar ">
                        <button className=" snap-center w-[80px] h-[80px] bg-neutral rounded-full btn-outline btn-primary transform transition duration-500 hover:scale-110 ">
                          <img src={avatar} />
                        </button>
                      </div>
                      <div className="avatar ">
                        <button className=" snap-center w-[80px] h-[80px] bg-neutral rounded-full btn-outline btn-primary transform transition duration-500 hover:scale-110 ">
                          <img src={avatar} />
                        </button>
                      </div>
                      <div className="avatar ">
                        <button className=" snap-center w-[80px] h-[80px] bg-neutral rounded-full btn-outline btn-primary transform transition duration-500 hover:scale-110 ">
                          <img src={avatar} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="-mt-20 w-[40rem] flex justify-center">
                    <div className="">
                      <div>
                        <label className="label mt-10 ml-10">
                          <span className="label-text-bold font-bold">Nombre de usuario</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Escribe aquí"
                          className=" mt-1 ml-10 input input-bordered w-full max-w-md"
                        />
                      </div>

                      <div> 
                        <label className="label mt-4 ml-10">
                        <span className="label-text-bold font-bold ">Contraseña</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Escribe aquí"
                        className=" mt-1 ml-10 input input-bordered w-full max-w-md"
                      />
                      </div>
                     <div>
                        <button className="btn btn-primary ml-10 mt-10 mb-10 w-full max-w-md">
                        Crear Usuario
                      </button>
                     </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid w-[30rem] flex-grow card place-items-center mr-[15rem]">
            <img src={woman} className="mr-20"></img>
          </div>
        </div>
        <div className="-mt-[5.8rem]">
          <img src={waves} className="w-[150rem] h-[18rem] z-40"></img>
        </div>
      </div>
    </>
  );
};

export default SignUp;
