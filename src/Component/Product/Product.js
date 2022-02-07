import React from 'react';
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    // console.log(props.product.name)
     const {img,price,seller,name,stock,star,category}=props.product;
    return (
        <div>
           <div className="product_style">
               <img src={img} alt="" />
               <div className='descpriation'>
               <h4>{name}</h4>
               <span><small>${price}</small></span>
               <h6>Seller name:{seller}</h6>
               <h5>Stock is limited by {stock} . please order now </h5>
               <div className='product_rating'>
                   {Array(star).fill().map((_, i)=>
                   <p>*</p>
                   )}
               </div>
                    <div>
                        <button 
                        className='main_button' 
                        onClick={()=>props.handlerAddtoCart(props.product)}
                        >
                            <FontAwesomeIcon style={{marginRight:"8px"}} icon={faShoppingCart} />
                            Add to cart</button>
                    </div>
               </div>
           </div>
        </div>
    );
};

export default Product;