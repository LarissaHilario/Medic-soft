
import Drawer from "../Drawer";
import Navbar from "../Navbar";

import image from "/Medic-soft.png";
const Header = ({title,description}) => {
  return (
    <>
   <div className="flex w-full">
  <div className="grid w-1flex-grow place-items-center"><Drawer/></div>
  <div className="divider divider-horizontal l"></div>
  <div className="grid h-20 mt-5 flex-grow place-items-center"><Navbar/>
  <div className="flex  w-full h-[840px]">
 <div className="grid bg-neutral  artboard  artboard-horizontal w-full h-full ">
 <div className="collapse-title text-4xl font-bold  p-10">
   {title} 

   {description}
  </div>
  </div> 
  </div> 
  </div>
</div>
    </>
  );
};

export default Header;
