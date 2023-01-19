import React from "react";
import {
  Divider,
  Image,
  CardBody,
  Heading,
  Text,
  Button,
  Card,
  Stack,
  CardFooter,
  ButtonGroup,
  Link,
} from "@chakra-ui/react";

const Item = ({ image, title, price, description, category }) => {
  return (
    <Card
      maxW="sm"
      mt="5"
      boxShadow="2xl"
      w={{ base: "250px", md: "250px", lg: "300px" }}
      background="lightblue"
    >
      <CardBody>
        <Image src={image} borderRadius="lg" boxSize="300px" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Link to={`${category}`}>
            <Text>{category}</Text>
          </Link>
          <Text>{description}</Text>
          <Text color="blue.600" fontSize="2xl">
            {`$ ${price}`}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Item;
