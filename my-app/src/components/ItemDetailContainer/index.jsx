import { useParams } from "react-router-dom";
import Item from "../itemListContainer/Item";

const ItemDetailContainer = ({ products }) => {
  let pId = useParams().pathname.split("/")[2];
  const product = products[pId];

  if (!product) {
    return (
      <div>
        <strong>Product not found</strong>
      </div>
    );
  }

  const { image, title, price, description, category } = product;

  return (
    <Item
      image={image}
      title={title}
      price={price}
      description={description}
      category={category}
    ></Item>
  );
};

export default ItemDetailContainer;
