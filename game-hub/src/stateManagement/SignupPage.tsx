import Signup from "./Signup"
import TaskLIst from "./TaskLIst"


function Sign() {
  return (
    <div className="d-flex">
        <div className="col-6">
        <TaskLIst/>
        </div>
        <div className="col-6">
        <Signup/>
        </div>
        
    </div>
  )
}

export default Sign