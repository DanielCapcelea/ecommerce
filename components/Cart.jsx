import React, {useRef} from 'react';
import Link from 'next/link';
import {AiOutlineMinus, AiOutlinePlus, AiOutlineRight, AiOutlineShopping} from 'react-icons/ai';
import {TiDeleteOutline} from "react-icons/ti";
import {toast} from "react-hot-toast";
import {useStateContext} from "../stateContext/StateContext";
import {urlFor} from "../lib/client";

const Cart = () => {
    const cartRef = useRef();
    const {qty, totalPrice, totalQuantities, cartItems, setShowCart} = useStateContext();

    return (
        <div className='cart-wrapper' ref={cartRef}>
            <div className='cart-container'>
                <button
                    type='button'
                    className='cart-heading'
                    onClick={() => setShowCart(false)}
                >
                    <AiOutlineRight/>
                    <span className='heading'>Your Cart</span>
                    <span className='cart-num-items'>({totalQuantities} items)</span>
                </button>

                {cartItems.length < 1 && (
                    <div className='empty-cart'>
                        <AiOutlineShopping size={150}/>
                        <h3>Your shopping bag is empty</h3>
                        <Link href='/'>
                            <button
                                type='button'
                                className='btn'
                                onClick={() => setShowCart(false)}
                            >
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                )}

                <div className='product-container'>
                    {cartItems.length >= 1 && cartItems.map((item) => (
                        <div
                            className='product'
                            key={item._id}
                        >
                            <img
                                src={urlFor(item?.image[0])}
                                className='cart-product-image'
                            />
                            <div className='item-desc'>
                                <div className='flex top'>
                                    <h5> {item.name} </h5>
                                    <h4>${item.price}</h4>
                                </div>
                                <div className='flex bottom'>
                                    <div>
                                        <p className='quantity-desc'>
                                            <span onClick='' className='minus'><AiOutlineMinus/></span>
                                            <span className='num'> {qty} </span>
                                            <span onClick='' className='plus'><AiOutlinePlus/></span>
                                        </p>
                                    </div>
                                    <button
                                        type='button'
                                        className='remove-item'
                                        onClick=''
                                    >
                                        <TiDeleteOutline/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {cartItems.length >= 1 && (
                    <div className='cart-bottom'>
                        <div className='total'>
                            <h3> Subtotal: </h3>
                            <h3>${totalPrice}</h3>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;