import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  const color = score > 90 ? "green" : score > 80 ? "red" : "";
  return (
    <Badge mt={2} paddingX={2} borderRadius={"2px"} colorScheme={color}>
      {score}
    </Badge>
  );
}

export default CriticScore;
