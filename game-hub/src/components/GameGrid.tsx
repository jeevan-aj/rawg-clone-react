import useGame from "../hooks/useGames";
import { Text } from "@chakra-ui/react";

function GameGrid() {
  const { error, games } = useGame();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((cur) => (
          <li key={cur.id}>{cur.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
