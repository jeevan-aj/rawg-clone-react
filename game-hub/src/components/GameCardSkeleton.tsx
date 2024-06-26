import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <>
      <Card>
        <Skeleton height={"200px"} width={"400px"} />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </>
  );
}

export default GameCardSkeleton;
