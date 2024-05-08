/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useBooks from "../../../hooks/useBooks";

function BookDetails({ bookName1 }) {
  const { bookName = { bookName1 } | "সহিহ বুখারী" } = useParams();
  const { books, isLoading, error } = useBooks();

  // Since you are fetching books, let's assume the chapters are directly accessible and structured correctly
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  const foundBook = books.find((book) => book.bookName == bookName);
  console.log(foundBook);
  return (
    <div>
      <h1>Book: {bookName}</h1>
      <div>
        {false && <h2>Chapters</h2>}
        <div className="grid grid-cols-1  gap-4 overflow-y-auto">
          {foundBook?.chapters?.map((chapter, index) => (
            <Link
              to={`/${bookName}/${chapter.chapterName}`} // Modify URL as necessary
              key={index}
              className="block transform transition duration-300 ease-in-out hover:scale-105"
            >
              <div className="flex justify-between max-w-sm rounded overflow-hidden shadow-lg bg-white hover:bg-green-100 p-5">
                <div className="flex justify-end gap-4 items-center ">
                  <div className="font-bold text-xl mb-2">
                    <div className="text-black ">
                      {index + 1}
                      {chapter.chapterName}
                    </div>
                  </div>
                  <p className="text-gray-700 text-base">
                    1- {chapter.pages.length}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
