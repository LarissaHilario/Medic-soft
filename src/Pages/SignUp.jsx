import waves from '/waves.svg'
import image from '/logo.png'
import woman from '/woman.png'
import avatar from '/avatar1.svg'

const SignUp = () => {
    return (
        <>
            <div className="min-h-screen bg-base-100 overflow-hidden">
                <div className="flex-col flex items-center  mt-5 object-center ">
                    <img src={image} className=" w-100 h-30 "></img>
                </div>
                <div className="flex w-full">
                    <div className="grid h-full w-full flex-grow card place-items-center ">
                        <div className='flex w-[60rem] h-[45rem] ml-20 flex justify-center '>
                            <div className="grid bg-neutral  artboard artboard-horizontal  ml-20 w-full h-full rounded-3xl">

                                <div className="form-control w-full max-w-xs">
                                <label className="label mt-10 ml-10">
                                        <span className="label-text ">Selecciona un avatar</span>
                                    </label>
                                    <div className="flex justify-center w-[50rem]">
                                        <div className="flex gap-8 mt-[1rem] p-10 w-full h-[200px] no-scrollbar overflow-x-scroll">
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
                                    <label className="label">
                                        <span className="label-text ">Nombre de usuario</span>
                                    </label>
                                    <input type="text" placeholder="Escribe aquí" className="input input-bordered w-full max-w-xs" />
                                    <label className="label">
                                        <span className="label-text ">Contraseña</span>
                                    </label>
                                    <input type="text" placeholder="Escribe aquí" className="input input-bordered w-full max-w-xs" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid w-[30rem] flex-grow card place-items-center mr-20">
                        <img src={woman} className='mr-20'>
                        </img>
                    </div>
                </div>
                <div className="-mt-[14rem]">
                    <img src={waves} className="w-[150rem] h-[18rem] z-40"></img>
                </div>



            </div>

        </>
    )
}

export default SignUp