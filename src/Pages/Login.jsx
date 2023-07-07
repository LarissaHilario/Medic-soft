import image from "/logo.png";
import wave from "/waves.svg"
import avatar from "/avatar1.svg"

import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';

const Login = () => {
  return (
    <>
      <div className="min-h-screen bg-base-100 overflow-hidden">
        <div className="flex-col flex items-center  mt-5 object-center ">
          <img src={image} className="w-100 h-30 "></img>
        </div>
        <div className="flex justify-center">
        <div className="flex  gap-8 mt-[2rem] p-9 w-[42%] h-[390px] no-scrollbar overflow-x-scroll">
          <div className="avatar ">
            <button className=" snap-center w-[221px] h-[221px] bg-neutral rounded-full btn-outline btn-primary transform transition duration-500 hover:scale-110 ">
              <img src={avatar}/>
              <div>
                <label className="font-bold text-4xl p-10">Aylin</label>
              </div>
              
            </button>
          </div>
          <div className="avatar">
            <button className="w-[221px] h-[221px] bg-neutral rounded-full btn-outline btn-primary transform transition duration-500 hover:scale-110 ">
              <img src={avatar}/>
              <div>
                <label className="font-bold text-4xl p-10">Aylin</label>
              </div>
              
            </button>
          </div>
          <div className="avatar">
            <button className="w-[221px] h-[221px] bg-neutral rounded-full btn-outline btn-primary transform transition duration-500 hover:scale-110 ">
              <img src={avatar}/>
              <div>
                <label className="font-bold text-4xl p-10">Aylin</label>
              </div>
              
            </button>
          </div>
          <div className="avatar">
            <button className="w-[221px] h-[221px] bg-neutral rounded-full btn-outline btn-primary transform transition duration-500 hover:scale-110 ">
              <img src={avatar}/>
              <div>
                <label className="font-bold text-4xl p-10">Aylin</label>
              </div>
              
            </button>
          </div>
        </div>
        <div className="flex justify-center ml-5 mt-[4.5rem]">
          <button className="w-[221px] h-[221px]  rounded-full btn-primary transform transition duration-500 hover:scale-110">
              <Icon path={mdiPlus} size={9} />
          </button>
        </div>
        </div>
        <div className="w-full py-52 overflow-hidden">
          <img src={wave} className=" w-full"></img>
        </div>

      </div>
    </>

  );
};

export default Login;
