const productArr = [
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
]


function App() {
  return (
    <div className="app">
      <h1 style={{color: 'black'}}>Re-Store</h1> {/* inline styling */}
      {console.log('hello, motherfucker!')}
      <h6>|-------------------------------|</h6>
      {productArr.map((item /*, index */) => ( 
          /* rounded brackets help to avoid return statement, and used for one line of code which is going to be returned
            while curly brackets require return */
          <h4 key={item.id}>{item.name} - ${item.price}</h4>  
          /* a key with its unique value should be added to each element which has been created in loop */
          /* one of solution whould be using second argument of map - index */
        ))
      }
      <h6>|-------------------------------|</h6>
      <h3>Total Amount: {productArr.length}</h3>
    </div>
  );
}

export default App;
