
import { Box, Button, Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Edit() {
  const Navigate = useNavigate();
  return (
    <Box className='d-flex justify-content-center align-items-center' minH={"80vh"} >
     <Card w={"300px"}>
      <CardHeader>Tihs is part of a nested route</CardHeader>
      <CardBody>Click here to go home</CardBody>
      <CardFooter>
      <Button onClick={()=> {
          Navigate('/')
        }}>go home</Button>
      </CardFooter>
     </Card>

        
    </Box>
  )
}

export default Edit