export const Navbar = () => {
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
            <a className="btn btn-ghost text-xl">daisyUI</a>
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
              <button className="btn btn-sm bg-slate-200"> btn</button>
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
