import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonCircle,
  Text,
} from "@chakra-ui/react";
import useGenere from "../hooks/useGenere";
import crop from "../services/image-url";

function GenereList() {
  const { data, loading,error } = useGenere();
  const genereSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1];
  if(error) return null;
  return (
    <List px={5} mt={7}>
      {loading &&
        genereSkeleton.map(() => (
          <HStack py={2}>
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
            <Text>{cur.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenereList;
