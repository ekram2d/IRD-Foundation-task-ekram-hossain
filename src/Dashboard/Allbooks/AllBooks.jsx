import { useEffect, useState } from "react";
import DashboardCommonSection from "../../shared/DashboardCommonSection";
import "./allbook.css";
import SingleBook from "./SingleBook";

const AllBooks = () => {
  const [allbooks, setAllbooks] = useState([]);

  useEffect(() => {
    // Fetch the JSON data from the public folder
    fetch("/all_books_data.json")
      .then((response) => response.json())
      .then((data) => {
        // Set the JSON data to the state
        setAllbooks(data);
      })
      .catch((error) => {
        console.error("Error fetching JSON data:", error);
      });
  }, []);
  console.log(allbooks);
  return (
    <div className="overflow-y-scroll h-screen w-[80%] mx-auto">
      <DashboardCommonSection text={"সকল বই"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 shadow-2xl">
        {allbooks.map((book, index) => (
          <SingleBook key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
