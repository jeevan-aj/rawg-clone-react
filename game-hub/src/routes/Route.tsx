import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Edit from "../page/Edit";
import Contact from "../page/Contact";
import HomePage from "../page/HomePage";
import Layout from "../page/Layout";
import User from "../page/User";
import Error from "../page/ErrorPage";
import UserPage from "../page/UserPage";

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
