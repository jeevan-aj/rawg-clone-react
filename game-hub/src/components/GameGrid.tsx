import useGame from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

function GameGrid() {
  const { error, games } = useGame();
  
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1,md:2,lg:3,xl:3,"2xl":5}} padding={10} spacing={10}>
        {games.map((cur)=> (
          <GameCard game={cur} key={cur.id}/>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
