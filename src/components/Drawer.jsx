import { NavLink } from 'react-router-dom';
import image from '/logo.png'
import "./Header/Drawer.css"
import Icon from '@mdi/react';
import { mdiMonitorDashboard } from '@mdi/js';
import { mdiFileChart } from '@mdi/js';
import { mdiChartBar } from '@mdi/js';
import { mdiClipboardTextClockOutline } from '@mdi/js';
import { mdiThermometerPlus } from '@mdi/js';







const Drawer = () => {
    return(
        <>
        <div className="drawer lg:drawer-open">
        <input type="checkbox" id="drawer" className="drawer-toggle "/>
        <label htmlFor="drawer" className="absolute top-7 left-0 inline-block p-2 transition-all  bg-neutral rounded-md peer-checked:rotate-180 peer-checked:left-64 lg:hidden">
        </label>
        <div className="drawer-side">
        <label htmlFor="drawer" className="drawer-overlay"></label>
          <div className=' p-4 w-80 h-full peer-checked:translate-x-0'>
            <img className="image" src={image}></img>
            <ul className='menu font-overpass pt-10'>
                <NavLink to="/dashboard"><li className='p-2' ><a className=' text-base font-bold intems-center'> <Icon path={mdiChartBar} size={1} color="#1154FE" /> Dashboard</a></li></NavLink>
                <NavLink to="/registro"><li className='p-2'><a className=' text-base font-bold'> <Icon path={mdiThermometerPlus} size={1} color="#1154FE"/>Registro</a></li></NavLink>
                <NavLink to="/historial"><li className='p-2'><a className=' text-base font-bold'> <Icon path={mdiClipboardTextClockOutline} size={1} color="#1154FE"/>Historial</a></li> </NavLink>
                <NavLink to="/informes"><li className='p-2'><a className=' text-base font-bold align-middle items-center'> <Icon path={mdiFileChart} size={1} color="#1154FE" />Informes</a></li></NavLink>
            </ul>
          </div>
        </div>
      </div>
        </>
        
    )
};

export default Drawer
