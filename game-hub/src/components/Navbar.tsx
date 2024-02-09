import { HStack, Image} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

function Navbar() {
  return (
    <HStack justifyContent={"space-between"} p={"10px"}>
      <Image src={logo} boxSize="50px" p="5px" borderRadius="10px" />
      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;
