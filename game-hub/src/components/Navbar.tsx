import { HStack, Image} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

function Navbar() {
  return (
    <HStack justifyContent={"space-between"} p={"10px"}>
      <Image src={logo} boxSize="50px"   boxShadow={'1px 1px 20px 1px #a8adaa'} borderRadius="10px" />
      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;
