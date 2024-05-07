/* eslint-disable react/prop-types */
const DashboardCommonSection = ({ text }) => {
  return (
    <div className="h-20  bg-white shadow-2xl mt-10 rounded-md">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-black font-bold">{text}</h1>
        <label className="input input-bordered flex items-center gap-2 bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          <input type="text" className="grow" placeholder="Search" />
        </label>
      </div>
    </div>
  );
};

export default DashboardCommonSection;
