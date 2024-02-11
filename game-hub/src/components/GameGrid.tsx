import useGame from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

function GameGrid() {
  const { error, games, loading } = useGame();
  const Skeleton = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3, "2xl": 5 }}
        padding={10}
        spacing={10}
      >
        {loading &&
          Skeleton.map((cur) => (
            <GameCardContainer>
              <GameCardSkeleton key={cur} />
            </GameCardContainer>
          ))}
        {games.map((cur) => (
          <GameCardContainer>
              <GameCard game={cur} key={cur.id} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
