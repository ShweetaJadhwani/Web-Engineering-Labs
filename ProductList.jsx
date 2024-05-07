import React, { useState } from 'react';
import './ProductList.css';
function ProductList() {
  const [products] = useState([
    { id: 1, name: 'Product 1', quantity: 10, price: 500 },
    { id: 2, name: 'Product 2', quantity: 20, price: 200},
    { id: 3, name: 'Product 3', quantity: 30, price: 300}
  ]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product, quantity) => {
    const existingItemIndex = cart.findIndex(item => item.product.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { product, quantity }]);
    }
    setTotalPrice(totalPrice + (product.price * quantity));
  };

  return (
    <div className='Product'>
      

      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <span>{product.name} - ${product.price} per item</span>
            <button onClick={() => addToCart(product, 1)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h2>Added Items in Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <span>{item.product.name} - Quantity: {item.quantity}</span>
          </li>
        
        ))}
      </ul>
      <button onClick={()=> remove(product,1)}>Remove the item</button>
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
}


export default ProductList;
