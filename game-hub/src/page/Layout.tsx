import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar.1";


function Layout() {
  return (
    <>
      <Navbar/>
      <div id="main">
        <Outlet/>
      </div>
    </>
  );
}

export default Layout;
