import React, {useEffect} from 'react';
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
                    <p className='logo-text'>
                        Dream Like Me
                    </p>
                    <div className='logo-img'>
                        <Image
                            src={Logo}
                            alt="logo"
                            width={57}
                            height={57}
                        />
                    </div>
                </div>
            </Link>

            <button
                type='button'
                className='cart-icon'
                onClick={() => setShowCart(prev => !prev)}
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
