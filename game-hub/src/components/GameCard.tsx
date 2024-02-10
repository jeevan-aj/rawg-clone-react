import { Card, CardBody, Heading, Img } from '@chakra-ui/react';
import {Game} from '../hooks/useGames'
import PlatformList from './PlatformList';

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
            <PlatformList platform={game.parent_platforms.map(p => p.platform)}></PlatformList>
        </CardBody>
    </Card>
    </>
  )
}

export default GameCard