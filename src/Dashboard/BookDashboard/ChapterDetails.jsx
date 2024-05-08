import { useParams } from "react-router-dom";
import useBooks from "../../hooks/useBooks";

const ChapterDetails = () => {
  const { bookName = "সহিহ বুখারী", chapterName = "ওহীর সূচনা অধ্যায়" } =
    useParams();
  const { books, isLoading, error } = useBooks();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // First find the correct book by bookName

  // Then find the specific chapter in that book by chapterName
  const foundBook = books.find((book) => book.bookName === bookName);

  // Then find the specific chapter in that book by chapterName
  const foundChapter = foundBook?.chapters.find(
    (chapter) => chapter.chapterName === chapterName
  );

  console.log(foundChapter); // This will log the specific chapter details

  return (
    <div>
      <div className="shadow-xl text-black p-4 font-bold">{bookName}</div>
      <div className="shadow-xl text-black p-4 font-bold">
        {foundChapter?.chapterId} {chapterName}
      </div>
      <div>
        <h2>Details for {chapterName}</h2>
        <div className="flex-1 gap-3 text-black">
          {foundChapter &&
            foundChapter.pages.map((page, index) => (
              <p key={index}>
                {index + 1}: {page?.pageContent}
              </p> // Assuming 'page' could be a descriptive property
            ))}
        </div>
      </div>
    </div>
  );
};

export default ChapterDetails;
