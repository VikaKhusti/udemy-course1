import { useState, useEffect } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Product } from "../../app/models/product"
import ProductList from "./ProductList";

export default function Catalog(){

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        agent.Catalog.list()
        .then(products => setProducts(products))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, []) /* [] means that this code will be run just once, but not every time component load */

    if(loading) return <LoadingComponent message="Loading..."/>;

    return (
        <>
            <ProductList products={products} />
        </>
        
    )
}

