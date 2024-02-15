import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Edit from "../page/Edit";

import HomePage from "../page/HomePage";
import Layout from "../page/Layout";
import User from "../page/User";
import Error from "../page/ErrorPage";
import Counter from "../stateManagement/Counter";
import TaskLIst from "../stateManagement/TaskLIst";
import Signup from "../stateManagement/Signup";
import { Navbar } from "../components/Navbar.1";
import Sign from "../stateManagement/SignupPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/layout",
    element: <Layout />,
    children: [
      { path: "", element: <Edit /> },
      { path: "home", element: <HomePage /> },
      { path: "onemore", element: <User /> },
    ],
  },
  { path: "/contact", element: [<Layout />, <TaskLIst />, <Signup />] },

  { path: "/users", element: [<Layout />, <Counter />] },
  { path: "/signup", element: [<Navbar />, <Sign />] },
]);

export default Router;
