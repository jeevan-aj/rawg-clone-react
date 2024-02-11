import { HStack, Image} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

function Navbar() {
  return (
    <HStack justifyContent={"space-between"} p={"10px"} m={2} alignItems={"center"}>
      <Image src={logo} boxSize="40px"   boxShadow={'1px 1px 20px 1px #a8adaa'} borderRadius="10px" />
      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;
