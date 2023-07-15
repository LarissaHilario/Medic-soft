import { useDispatch, useSelector } from "react-redux";
import Drawer from "./Drawer";
import avatar from "/avatar1.svg";
import { logout } from "../Store/Slices/authSlice";
import { deleteTheme, deleteToken } from "../Helpers/auth";
import { axiosInstancia } from "../Helpers/AxiosInstancia";
import { useEffect, useState } from "react";
import { cleanUsers } from "../Store/Slices/usersSlice";
import { cleanData } from "../Store/Slices/lastData";
import { cleanAllData } from "../Store/Slices/allDataSlice";
import { cleanTemp } from "../Store/Slices/WeeksTemperatureSlice";
import sun from '/dom.png'
import moon from '/media-luna.png'
import Icon from '@mdi/react';
import { mdiWhiteBalanceSunny } from '@mdi/js';
import { mdiMoonWaxingCrescent } from '@mdi/js';
import { cleanOxygen } from "../Store/Slices/WeekOxygenSlice";


const Navbar = () => {
  const dispatch= useDispatch()
  const name= localStorage.getItem('nombre')
  const photo=localStorage.getItem('photo')
  
  const handleLogout = () => {
    dispatch(logout());
    deleteToken();
    dispatch(cleanUsers())
    dispatch(cleanData())
    dispatch(cleanAllData())
    dispatch(cleanTemp())
    dispatch(cleanOxygen())
    deleteTheme()
  };

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  

  return (
    <>
      <div className="navbar">
        <div className="flex-1">
        <div className="stat">
          <div>
             <div className="stat-value font-overpass ml-2">Hola {name}</div>
          <div className="stat-title font-medium ml-2">Veamos cómo te encuentras hoy</div> 
          </div>
        </div> 
       
        </div>
       
        <div className="flex-none gap-2">
          <div className="form-control -mt-3">
          <div className="flex-none">
        {/* Toggle button here */}
        <button className="btn btn-square btn-ghost">
          <label className="swap swap-rotate w-12 h-12">
            <input
              type="checkbox"
              onChange={handleToggle}
              // show toggle image based on localstorage theme
              checked={theme === "light" ? false : true}
            />
            {/* light theme sun image */}
            <div alt="light" className=" swap-on">
            <Icon path={mdiWhiteBalanceSunny}  size={1.5} />
            </div>
            
            {/* dark theme moon image */}
            <div alt="dark" className=" swap-off">
            <Icon path={mdiMoonWaxingCrescent} color={'#4F7FFD'} size={1.5} />
            </div>
            
           
          </label>
        </button>
      </div>
          </div>
          <div className="dropdown dropdown-end -mt-3">
            <button
              tabIndex={1}
              className="btn btn-accent btn-ghost-accent btn-circle"
            >
              <div className=" avatar online">
                <img src={photo}/>
              </div>
            </button>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a onClick={handleLogout}>Cerrar sesión</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </>
  );
};
export default Navbar;
