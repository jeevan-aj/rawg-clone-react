import { useContext } from "react"
import ListConetxt from "../context/ListContext"
import SignUp from "./SignUp"



function Navbar() {
  const {tasks} = useContext(ListConetxt)
  return (
    <div className="Nav nav-fill d-flex align-items-center justify-content-between border border-black px-5">
    <h3>Navbar</h3>
    <div className="d-flex">
    <h6>Cart <span className="btn btn-primary btn-sm m-1">{tasks.length}</span></h6>
    <SignUp/>
    </div>
   

    </div>
  )
}

export default Navbar