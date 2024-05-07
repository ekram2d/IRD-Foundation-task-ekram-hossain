/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const SingleBook = ({ book }) => {
  return (
    <div className=" p-4 rounded-lg bg-white hover:bg-green-100 ">
      {/* Your card layout goes here */}
      <div className="flex gap-4  items-center">
        <div className="border  rounded-badge hover:bg-green-400  p-2 ">
          {book?.code}
        </div>
        <div>
          <h3 className="text-black">{book.source}</h3>
          <p className="text-black">{book.range}</p>
        </div>
      </div>
      {/* Add other book details as needed */}
    </div>
  );
};

export default SingleBook;
