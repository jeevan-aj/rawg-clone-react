
import { useRouteError } from 'react-router-dom'

function Error() {

    const error = useRouteError() as {message:string, statusText:string }
    console.error(error)
  return (
    <div>
        <h1>Oops</h1>
        <p>sorry an unexpected error occured</p>
        <p>
            
          {error.message || error.statusText}
           
        </p>
    </div>
  )
}

export default Error