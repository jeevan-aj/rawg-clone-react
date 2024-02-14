import { Button, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <HStack
      justifyContent={"space-between"}
      p={"10px"}
      m={2}
      alignItems={"center"}
    >
      <Image
        src={logo}
        boxSize="40px"
        boxShadow={"1px 1px 20px 1px #a8adaa"}
        borderRadius="10px"
      />

      <HStack>
        <Link to={`/layout`}>
          <Button>user</Button>
        </Link>
        {(location.pathname === '/' || location.pathname === '/contact') &&
          <Link to={`/contact`}>
          <Button>contact</Button>
        </Link>
        }
        {location.pathname === "/layout" && (
          <Link to={"onemore"}>
            <Button>onemore</Button>
          </Link>
        )}
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
}
