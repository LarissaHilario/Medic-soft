import Informes from "../../Pages/Reports";
import Register from "../../Pages/Register";
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
      </div>
    </>
  );
};

export default Header;
