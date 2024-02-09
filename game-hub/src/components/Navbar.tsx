import { HStack ,Image, Text} from '@chakra-ui/react';
import logo from '../assets/logo.webp'

function Navbar() {
  return (
   <HStack>
        <Image src={logo} boxSize="50px" ml="5px" borderRadius="10px"/>
        <Text>Navbar</Text>
   </HStack>
  )
}

export default Navbar