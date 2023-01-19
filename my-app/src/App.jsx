import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { Center } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import axios from "axios";

function App() {
  const [productList, setProductList] = useState([]);

  const requestAPI = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProductList(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    requestAPI();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
        <Route
          path="/"
          element={
            <Center>
              <ItemListContainer
                products={productList}
                title="All products"
              ></ItemListContainer>
            </Center>
          }
        ></Route>
        <Route
          path="/product/:id"
          element={
            <Center>
              <ItemDetailContainer products={productList}></ItemDetailContainer>
            </Center>
          }
        ></Route>
        <Route
          path="/women"
          element={
            <Center>
              <ItemListContainer
                products={productList}
                title="Women items"
              ></ItemListContainer>
            </Center>
          }
        ></Route>
        <Route
          path="/men"
          element={
            <Center>
              <ItemListContainer
                products={productList}
                title="Men items"
              ></ItemListContainer>
            </Center>
          }
        ></Route>
        <Route
          path="/jewels"
          element={
            <Center>
              <ItemListContainer
                products={productList}
                title="Jewels items"
              ></ItemListContainer>
            </Center>
          }
        ></Route>
        <Route
          path="/tech"
          element={
            <Center>
              <ItemListContainer
                products={productList}
                title="Tech items"
              ></ItemListContainer>
            </Center>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
