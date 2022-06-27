import { Button } from "@mui/material";
import { Product } from "../../app/models/product"
import ProductList from "./ProductList";

interface Props {
    products: Product[];
    addProduct: () => void;
}

export default function Catalog({products, addProduct}: Props){
    return (
        <>
            <ProductList products={products} />

            <h3>Total Amount: {products.length}</h3>
            <Button variant='contained' onClick={addProduct}>Add a Product</Button>
        </>
        
    )
}

