import DashboardCommonSection from "../../shared/DashboardCommonSection";

const Profile = () => {
  return (
    <div className="overflow-y-scroll h-screen w-[80%] mx-auto">
      <DashboardCommonSection text={"বুকমার্ক পেইজ"} />

      <div className="flex justify-center items-center mt-10 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[300px] h-32 border border-green-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 13.5H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
          />
        </svg>
      </div>
      <h1 className="mt-10 text-center text-black">
        কোন বুকমার্ক ফোল্ডার পাওয়া যায়নি
      </h1>
    </div>
  );
};

export default Profile;
