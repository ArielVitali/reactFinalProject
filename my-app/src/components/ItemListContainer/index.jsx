import { Box, Heading } from "@chakra-ui/react";
import ItemList from "./ItemList";

import { useLocation } from "react-router-dom";

const ItemListContainer = ({ products, title }) => {
  let p = [];
  const categoryAssociation = {
    women: "women's clothing",
    men: "men's clothing",
    jewels: "jewelery",
    tech: "electronics",
  };

  const category = useLocation().pathname.split("/")[1] || "all";
  const stateCategory = categoryAssociation[category] || "all";

  if (stateCategory !== "all") {
    p = products.filter((product) => product.category === stateCategory);
  } else {
    p = products;
  }

  return (
    <>
      <Box>
        <Heading>{title}</Heading>
        <ItemList products={p}></ItemList>
      </Box>
    </>
  );
};

export default ItemListContainer;
