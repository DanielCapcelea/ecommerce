import React from 'react';
import Link from 'next/link';
import {AiOutlineShopping} from "react-icons/ai";
import {Cart} from './';
import {useStateContext} from "../stateContext/StateContext";
import Image from 'next/image';
import Logo from '../public/assets/logo.png';

const Navbar = () => {
    const {showCart, setShowCart, totalQuantities} = useStateContext();

    return (
        <div className='navbar-container'>
            <Link href='/'>
                <Image
                    src={Logo}
                    alt="logo"
                    width={45}
                    height={45}
                />
            </Link>
            <button
                type='button'
                className='cart-icon'
                onClick={() => setShowCart(true)}
            >
                <AiOutlineShopping/>
                <span className='cart-item-qty'>
                     {totalQuantities}
                </span>
            </button>

            {showCart && <Cart/>}
        </div>
    );
};

export default Navbar;
