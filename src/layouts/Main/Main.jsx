import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Navbar/Navbar";
import Navlinks from "./Navlinks";
import { useSelector } from "react-redux";

const Main = () => {
  const mode = useSelector((state) => state?.modechange?.mode);

  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row">
        {/* Navlinks container - Centered on left for large screens, bottom for small screens */}
        <div
          className={`bg-${mode ? "black" : "white"} ${
            mode ? "text-white" : "text-black"
          } shadow-xl fixed bottom-0 lg:relative lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-20 z-30 w-full`}
        >
          <Navlinks />
        </div>
        {/* Outlet and content area */}
        <div
          className={`w-full p-4 bg-${
            mode ? "black" : "gray-300"
          } mt-14 lg:mt-0 rounded-md ${mode ? "text-white" : "text-black"}`}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Main;
