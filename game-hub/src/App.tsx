import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GenereList from "./components/GenereList";
import { useState } from "react";
import { Genre } from "./hooks/useGenere";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import { Navbar } from "./components/Navbar.1";

function App() {
  const [selectedGenre, setSelectedGenere] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main "`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenereList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenere(genre)}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <PlatformSelector
          onSelectPlatform={(platform) => setSelectedPlatform(platform)}
        ></PlatformSelector>
        <GameGrid
          selectedGenre={selectedGenre}
          selectPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
