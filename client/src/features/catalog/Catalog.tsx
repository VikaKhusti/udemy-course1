import { Product } from "../../app/models/product"

interface Props {
    products: Product[];
    addProduct: () => void;
}

export default function Catalog({products, addProduct}: Props){
    return (
        <>
            {products.map((product, index ) => ( 
                /* rounded brackets help to avoid return statement, and used for one line of code which is going to be returned
                while curly brackets require return */
                <h4 key={index}>{product.name} - ${product.price}</h4>  
                /* a key with its unique value should be added to each element which has been created in loop */
                /* one of solution whould be using second argument of map - index */
            ))
            }
            <h6>|-------------------------------|</h6>
            <h3>Total Amount: {products.length}</h3>
            <button onClick={addProduct}>Add a Product</button>
        </>
        
    )
}

