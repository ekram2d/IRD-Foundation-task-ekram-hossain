import ErrorPage from "../pages/ErrorPage";

import Home from "../components/Home/Home";

import AllBooks from "../Dashboard/Allbooks/AllBooks";
import Subjectwise from "../Dashboard/Subjectwise/Subjectwise";
import Profile from "../Dashboard/Profile/Profile";
import { createBrowserRouter } from "react-router-dom";

import App from "../App";

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
    ],
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
