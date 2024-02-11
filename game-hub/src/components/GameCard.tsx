import { Card, CardBody,  HStack, Heading, Img } from '@chakra-ui/react';
import {Game} from '../hooks/useGames'
import PlatformList from './PlatformList';
import CriticScore from './CriticScore';

interface Props{
    game:Game;
}

function GameCard({game}:Props) {
  return ( 
    <>
    <Card borderRadius={10} overflow={'hidden'}>
        <Img src={game.background_image}/>
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
            <HStack justifyContent={'space-between'}>
            <PlatformList platform={game.parent_platforms.map(p => p.platform)}></PlatformList>
            <CriticScore score={game.metacritic}/>
            </HStack>
        </CardBody>
    </Card>
    </>
  )
}

export default GameCard