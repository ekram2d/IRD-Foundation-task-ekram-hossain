import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../../features/Dark/DarkSlice";

export const Navbar = () => {
  const text = useSelector((state) => state?.textchanger?.text);
  const mode = useSelector((state) => state?.modechange?.mode);
  const dispatch = useDispatch();
  console.log(mode);
  return (
    <>
      <section className="bg-white  shadow-2xl">
        <div className="navbar bg-white text-black">
          <div className="flex-1">
            <div className="border border-green-400  p-2 rounded-md text-green-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </div>
            <a className="btn btn-ghost text-xl">{text}</a>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control me-4 btn btn-sm bg-white">
              <input
                type="text"
                placeholder="Search Hadith"
                className="input input-bordered w-24 md:w-auto bg-white"
              />
            </div>
            <div>
              <button className="btn btn-sm bg-green-700">Suppor </button>
            </div>
            <div>
              <button
                onClick={() => dispatch(setMode(!mode))}
                className="btn btn-sm bg-slate-200"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              </button>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              ></div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col gap-11 shadow-2xl mt-10 p-2 items-start w-[5%] bg-red-400">
          <NavLink to="/about">ki</NavLink>
          <NavLink to="/">ki</NavLink>
          <NavLink to="/">ki</NavLink>
          <NavLink to="/">ki</NavLink>
          <NavLink to="/">ki</NavLink>
        </div> */}
      </section>
    </>
  );
};

export default Navbar;
