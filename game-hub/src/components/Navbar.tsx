import { HStack ,Image, Text} from '@chakra-ui/react';
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch';

function Navbar() {
  return (
   <HStack>
        <Image src={logo} boxSize="50px" p="5px" borderRadius="10px"/>
        <Text>Navbar</Text>
        <ColorModeSwitch/>
        
   </HStack>
  )
}

export default Navbar