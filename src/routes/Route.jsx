import ErrorPage from "../pages/ErrorPage";

import Home from "../components/Home/Home";

import AllBooks from "../Dashboard/Allbooks/AllBooks";
import Subjectwise from "../Dashboard/Subjectwise/Subjectwise";
import Profile from "../Dashboard/Profile/Profile";
import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import BookLayOut from "../Dashboard/BookDashboard/BookLayout/BookLayOut";
import Book from "../Dashboard/BookDashboard/BookLayout/Book";
import ChapterDetails from "../Dashboard/BookDashboard/ChapterDetails";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Home />,
  //   errorElement: <ErrorPage />,
  // },
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <BookLayOut />,
        children: [
          {
            path: "/:bookName",
            element: <Book />,
          },
          {
            path: "/:bookName/:chapterName",
            element: <ChapterDetails />,
          },
        ],
      },
      {
        path: "/all-books",
        element: <AllBooks />,
      },

      {
        path: "/subjectwise",
        element: <Subjectwise />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/:bookName", // :bookName will be a dynamic parameter
        element: <Book />,
      },
    ],
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
