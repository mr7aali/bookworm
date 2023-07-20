import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import AllBook from "../pages/AllBook";
import AddBook from "../components/AddBook";
import Details from "../components/Details";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/allbook/:id",
        element: <Details/>,
      },
      {
        path: "/allbook",
        element: <AllBook />,
      },
      {
        path:"addbook",
        element:<AddBook/>
      },
    ],
  },
]);

export default routes;
