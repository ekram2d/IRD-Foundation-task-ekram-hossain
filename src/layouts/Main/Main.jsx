/* eslint-disable react/jsx-no-duplicate-props */
import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Navbar/Navbar";
import Navlinks from "./Navlinks";
import { useSelector } from "react-redux";

const Main = () => {
  const mode = useSelector((state) => state?.modechange?.mode);
  return (
    <div className={mode ? "bg-black text-white" : "bg-white text-black"}>
      <Navbar />
      {/* Sidebar on the left for large screens */}
      <div className="hidden lg:flex">
        <div
          className={`flex flex-col gap-11 shadow-2xl p-2 items-start w-[5%] ${
            mode ? "bg-black" : "bg-white"
          } h-screen`}
        >
          <Navlinks
            style={`flex flex-col gap-11 shadow-2xl p-2 items-start w-[5%] ${
              mode ? "bg-black" : "bg-white"
            } h-screen`}
          />
        </div>
        <div
          className={`w-full rounded-xl lg:w-full ${
            mode ? "bg-black text-white" : "bg-slate-200 text-black"
          } hidden lg:block`}
        >
          <Outlet />
        </div>
      </div>

      {/* Outlet content at the top for small screens */}
      <div
        className={`${
          mode ? "bg-black text-white" : "bg-slate-200 text-black"
        } sm:block lg:hidden h-screen`}
      >
        <Outlet />
      </div>

      {/* Sidebar at the bottom for small screens */}
      <div
        className={`bg-white lg:hidden shadow-2xl fixed bottom-0 w-full flex justify-center ${
          mode ? "text-white" : "text-black"
        }`}
      >
        <div className="flex gap-11 p-2 items-center">
          <Navlinks style="flex gap-11 p-2 items-center" />
        </div>
      </div>
    </div>
  );
};

export default Main;
