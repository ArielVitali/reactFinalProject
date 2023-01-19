import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="3">
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
          ></Item>
        );
      })}
    </SimpleGrid>
  );
};

export default ItemList;
