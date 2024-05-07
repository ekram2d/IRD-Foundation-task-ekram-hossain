/* eslint-disable react/jsx-no-duplicate-props */
import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Navbar/Navbar";
import Navlinks from "./Navlinks";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      {/* Sidebar on the left for large screens */}
      <div className="hidden lg:flex ">
        <div className="hidden lg:flex flex-col gap-11 shadow-2xl  p-2 items-start w-[5%] bg-white h-screen">
          <Navlinks
            style={
              "hidden lg:flex flex-col gap-11 shadow-2xl  p-2 items-start w-[5%] bg-white h-screen"
            }
          />
        </div>
        <div className="w-full  bg-slate-200 rounded-xl lg:w-full hidden lg:block">
          <Outlet />
        </div>
      </div>

      {/* Outlet content on the right for large screens */}

      {/* Outlet content at the top for small screens */}
      <div className="bg-slate-200 sm:block r  lg:hidden h-screen">
        <Outlet />
      </div>

      {/* Sidebar at the bottom for small screens */}
      <div className="bg-white lg:hidden shadow-2xl  fixed bottom-0 w-full flex justify-center ">
        <div className="flex  gap-11 p-2 items-center">
          <Navlinks style={"flex  gap-11 p-2 items-center"} />
        </div>
      </div>
    </>
  );
};

export default Main;
