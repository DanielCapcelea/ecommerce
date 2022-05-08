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
                <div className='logo'>
                    <div className='logo-img'>
                        <Image
                            src={Logo}
                            alt="logo"
                            width={55}
                            height={55}
                        />
                    </div>
                    <p className='logo-text'>
                        Dream Like Me
                    </p>
                </div>
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
