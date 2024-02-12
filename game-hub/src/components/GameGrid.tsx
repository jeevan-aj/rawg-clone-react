import useGame from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenere";

interface Props {
  selectedGenre: Genre | null;
}

function GameGrid({ selectedGenre }: Props) {
  const { error, data, loading } = useGame(selectedGenre);
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
            <GameCardContainer key={cur}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((cur) => (
          <GameCardContainer key={cur.id}>
            <GameCard game={cur} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
