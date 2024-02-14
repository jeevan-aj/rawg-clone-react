
import { Flex } from '@chakra-ui/react'
import { useRouteError } from 'react-router-dom'

function Error() {

    const error = useRouteError() as {message:string, statusText:string }
    console.error(error)
  return (
    <Flex direction={'column'} justify={"center"} align={"center"} height={"100vh"} >
        <h1>Oops</h1>
        <p>sorry an unexpected error occured</p>
        <p>
            
          {error.message || error.statusText}
           
        </p>
    </Flex>
  )
}

export default Error