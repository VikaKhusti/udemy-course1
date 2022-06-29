import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios"; 
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/product";

export default function ProductDetails() {
    const {id} = useParams<{id: string}>();

    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [id])

    if(loading) return <Typography variant="h3">Loading...</Typography>

    if(!product) return <Typography variant="h3">Product not Found!</Typography>

    return (
        <Typography variant="h2">{product.name}</Typography>
    )
}