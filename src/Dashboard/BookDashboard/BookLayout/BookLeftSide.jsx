import { Link } from "react-router-dom";
import useBooks from "../../../hooks/useBooks";

import BookDetails from "./Book";
import { useState } from "react";

const BookLeftSide = () => {
  const { books, isLoading, error } = useBooks();
  const [activeTab, setActiveTab] = useState("books");

  const [bookName, setBookName] = useState("সহিহ বুখারী");

  console.log(bookName);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted w-[100%]">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab bg-green-500 text-white font-bold p-4"
          aria-label="বই"
          checked={activeTab === "books"}
          onChange={() => setActiveTab("books")}
          // Update the state to this tab when clicked
        />

        <div role="tabpanel" className="tab-content rounded-box p-6">
          <input
            placeholder="Search for Filter"
            className="w-full p-2 rounded-xl bg-gray-200"
          ></input>
          Tab content 1
          {books?.map((book, index) => (
            <Link
              onChange={() => setBookName(book?.bookName)}
              to={`/${book?.bookName}`}
              key={index}
              className="hover:opacity-80 hover:bg-green-400 gap-2 text-black"
            >
              <div className="max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{book?.bookName}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab bg-green-500 text-white font-bold p-4"
          aria-label="অধ্যায়"
          checked={activeTab === "chapters"}
          onChange={() => setActiveTab("chapters")} // Update the state to this tab when clicked
          // onClick={() => navigate(`/${bookName}`)}
        />
        <div role="tabpanel" className="tab-content rounded-box p-6">
          <input
            placeholder="Search for Filter"
            className="w-full p-2 rounded-xl bg-gray-200"
          ></input>
          <BookDetails bookName1={bookName}></BookDetails>
        </div>
      </div>
    </div>
  );
};

export default BookLeftSide;
