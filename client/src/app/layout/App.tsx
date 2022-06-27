import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, []) /* [] means that this code will be run just once, but not every time component load */

  function addProduct(){
    setProducts(prevState => [...prevState, {id: 4, name: 'new item', price: 13}])
  };

  return (
    <>
      <Typography variant='h1'>Re-Store</Typography> {/* inline styling */}
      <Catalog products={products} addProduct={addProduct}/>
    </>
  );
}

export default App;
