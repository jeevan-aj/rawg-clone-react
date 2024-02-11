import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

interface Props{
    children:ReactNode;
}

function GameCardContainer({children}:Props) {
  return (
    <>
        <Box  borderRadius={10} overflow={'hidden'} boxShadow={"1px 1px 5px .1px #56636e"} >
            {children}</Box>
    </>
  )
}

export default GameCardContainer