import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Product } from "../../app/models/product"

interface Props {
    products: Product[];
    addProduct: () => void;
}

export default function Catalog({products, addProduct}: Props){
    return (
        <>
            <List>
                {products.map((product, index ) => ( 
                    /* rounded brackets help to avoid return statement, and used for one line of code which is going to be returned
                    while curly brackets require return */
                    <ListItem key={index}>
                        <ListItemAvatar>
                            <Avatar src={product.pictureUrl}/>
                        </ListItemAvatar>
                        <ListItemText>
                            {product.name} - ${product.price}
                        </ListItemText>
                    </ListItem>  
                    /* a key with its unique value should be added to each element which has been created in loop */
                    /* one of solution whould be using second argument of map - index */
                ))
                }
            </List>

            <h3>Total Amount: {products.length}</h3>
            <Button variant='contained' onClick={addProduct}>Add a Product</Button>
        </>
        
    )
}

