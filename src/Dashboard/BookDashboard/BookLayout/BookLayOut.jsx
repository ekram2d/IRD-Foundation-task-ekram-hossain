import { Outlet, useParams } from "react-router-dom";
import BookLeftSide from "./BookLeftSide";

const BookLayOut = () => {
  const id = useParams();
  console.log(id?.bookName);
  return (
    <div className="flex justify-between gap-10 p-2 bg-white  h-screen ">
      <div className="w-[30%] bg-white">
        <div className="drawer lg:drawer-open z-10 ">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open Left Side
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 overflow-y-scroll  h-screen bg-white text-base-content">
              {/* Sidebar content here */}
              <BookLeftSide />
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[60%] overflow-y-scroll ">
        <Outlet />
      </div>
      <div className="w-[20%] ">
        <div className="drawer drawer-end lg:drawer-open">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn btn-primary"
            >
              Open Right Side
            </label>
          </div>
          <div className="drawer-side shadow-2xl">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu  w-80 min-h-full bg-white z-10 p-2 text-black  ">
              {/* Sidebar content here */}
              <h1 className="text-center ">সেটিংস</h1>
              <p className="mt-3 pt-6">আরবি ফন্ট সিলেক্ট করুন</p>

              <p className="mt-3 pt-6">এরাবিক ফন্ট সাইজ</p>
              <progress
                className="progress progress-warning w-56"
                value={0}
                max="100"
              ></progress>

              <progress
                className="progress progress-warning w-56"
                value="10"
                max="100"
              ></progress>
              <p className="mt-3 pt-6">অনুবাদ ফন্ট সাইজ</p>
              <progress
                className="progress progress-success w-56"
                value={0}
                max="100"
              ></progress>
              <progress
                className="progress progress-success w-56"
                value="10"
                max="100"
              ></progress>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookLayOut;
