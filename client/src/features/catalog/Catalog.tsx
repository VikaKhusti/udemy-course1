import { useState, useEffect } from "react";
import { Product } from "../../app/models/product"
import ProductList from "./ProductList";

export default function Catalog(){

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, []) /* [] means that this code will be run just once, but not every time component load */

    return (
        <>
            <ProductList products={products} />
        </>
        
    )
}

