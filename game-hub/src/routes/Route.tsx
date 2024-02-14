import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Edit from "../pages/Edit";
import Contact from "../pages/Contact";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";
import User from "../pages/User";
import Error from "../pages/ErrorPage";
import UserPage from "../pages/UserPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error/>
  },
  {
    path: "/layout",
    element: <Layout />,
    children: [
      { path: "", element: <Edit /> },
      { path: "home", element: <HomePage /> },
      { path: "onemores", element: <User /> },
    ],
  },
  { path: "/contact", element: [<Layout />, <Contact />] },
  {path:'/users',element:<UserPage/>}
]);

export default Router;
