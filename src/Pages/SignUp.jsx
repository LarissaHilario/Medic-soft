import waves from "/waves.svg";
import image from "/logo.png";
import woman from "/woman.png";
import avatar from "/avatar1.svg";

const SignUp = () => {
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
                    <span className="label-text-bold font-bold ">Selecciona un avatar</span>
                  </label>
                  <div className="flex justify-center w-[42rem]">
                  
                    <div className="flex gap-8 ml-[2rem] p-5 w-full h-[200px] no-scrollbar overflow-x-scroll">
                      <div className="avatar ">
                      <input type="checkbox" id="react-option" value="" className="hidden peer" required="" />
                      <label htmlFor="react-option" className="inline-flex items-center justify-center w-[80px] h-[80px] bg-neutral rounded-full cursor-pointer  peer-checked:scale-110 peer-checked:bg-primary peer-checked:transform transition duration-500 hover:scale-110 hover:bg-primary hover:transform transition duration-500">                           
          
                            <img src={avatar} />
                        
                      </label>

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
          <div className="grid h-full flex-grow card place-items-center mr-[15rem] ">
            <div className="w-[22rem] h-full py-8 ">
                <img src={woman} className=" "></img>
            </div> 
          </div>
        </div>
        <div className=" ">
          <img src={waves} className="w-full py-0 overflow-hidden"></img>
        </div>
      </div>
    </>
  );
};

export default SignUp;
