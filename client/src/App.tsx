import { useEffect, useState } from "react";

function App() {
  const [productArr, setProducts] = useState([
    {
      id: 1,
      name: 'item 1',
      price: 5
    },
    {
      id: 2,
      name: 'item 2',
      price: 8
    },
    {
      id: 3,
      name: 'item 3',
      price: 11
    }
  ]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, []) /* [] means that this code will be run just once, but not every time component load */

  function addProduct(){
    setProducts(prevState => [...prevState, {id: 4, name: 'new item', price: 13}])
  };

  return (
    <div className="app">
      <h1 style={{color: 'black'}}>Re-Store</h1> {/* inline styling */}
      <h6>|-------------------------------|</h6>
      {productArr.map((item, index ) => ( 
          /* rounded brackets help to avoid return statement, and used for one line of code which is going to be returned
            while curly brackets require return */
          <h4 key={index}>{item.name} - ${item.price}</h4>  
          /* a key with its unique value should be added to each element which has been created in loop */
          /* one of solution whould be using second argument of map - index */
        ))
      }
      <h6>|-------------------------------|</h6>
      <h3>Total Amount: {productArr.length}</h3>
      <button onClick={addProduct}>Add a Product</button>
    </div>
  );
}

export default App;
