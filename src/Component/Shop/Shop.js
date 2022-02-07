import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/products.json'
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
    useEffect(()=>{
        fetch('./../../fakeData/products.JSON')
        .then(res=> res.json())
        .then(data=> console.log(data))
        .catch(error=>console.log(error))
    },[]);
    //  console.log(fakeData);
     const first10=fakeData.slice(0,20)
     const [product,setProduct]=useState(first10);
     const [cart,setCart] = useState([])
    //  console.log(product.length)
    const handlerAddtoCart=(props)=>{
        console.log("button is clicked",props)
        const newCart=[...cart,props];
        setCart(newCart)
    }

    return (
        <div className='shop'>
            <div className="shop_container">
            <h1>This is shop component</h1>
            <h6>{product.length}</h6>
            <ul>
                {
                    product.map(products=> <Product 
                        handlerAddtoCart={handlerAddtoCart}
                        product={products}
                        ></Product>)
                }
            </ul>
            </div>
            <div className="cart">
               
                <Cart cart={cart}></Cart>
            </div>
           
        </div>
    );
};

export default Shop;