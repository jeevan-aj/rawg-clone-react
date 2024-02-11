import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaApple,
  FaXbox,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import{MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs'
import { IconType } from "react-icons";

interface Props {
  platform: Platform[];
}
function PlatformList({ platform }: Props) {
    const iconMap :{[key:string]:IconType} = {
        pc:FaWindows,
        playstation:FaPlaystation,
        mac:FaApple,
        xbox:FaXbox,
        linux:FaLinux,
        android:FaAndroid,
        iphone:MdPhoneIphone,
        nintendo:SiNintendo,
        web:BsGlobe
        
    }

  return (
    <HStack mt={2} color={"gray.500"}>
      {platform.map((cur) => (
        <Icon as={iconMap[cur.slug]} key={cur.id}/>
      ))}
    </HStack>
  );
}

export default PlatformList;
