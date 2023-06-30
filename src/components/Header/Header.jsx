import Drawer from "../Drawer";
import Navbar from "../Navbar";

import image from "/Medic-soft.png";

const Header = () => {
  return (
    <>
      <div className="flex w-full">
        <div className="grid w-1flex-grow place-items-center">
          <Drawer />
        </div>
        <div className="grid h-20 mt-5 flex-grow place-items-center">
          <Navbar />
         
        </div>
      </div>
    </>
  );
};

export default Header;
