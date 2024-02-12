import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";
import useGenere, { Genre } from "../hooks/useGenere";
import crop from "../services/image-url";


interface Props{
   onSelectGenre:(genre:Genre)=> void

}

function GenereList({onSelectGenre}:Props) {
  const { data, loading, error } = useGenere();
  const genereSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1];
  if (error) return null;
  return (
    <List px={5} mt={7}>
      {loading &&
        genereSkeleton.map((_, idx) => (
          <HStack py={2} key={idx}>
            <SkeletonCircle></SkeletonCircle>
            <Skeleton height={3} width={"80px"}>
              d
            </Skeleton>
          </HStack>
        ))}
      {data.map((cur) => (
        <ListItem key={cur.id} paddingY={2} fontSize="lg">
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={crop(cur.image_background)}
            ></Image>
            <Button onClick={() =>onSelectGenre(cur)} variant={"link"}>
              {cur.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenereList;
