import React from 'react';
import {AiFillInstagram, AiOutlineTwitter} from "react-icons/ai";

const Footer = () => {
    return (
        <div className='footer-container'>
            <p>
                Copyright © Dream Like Me {(new Date().getFullYear())}
            </p>
            <div style={{display: 'flex'}}>
                <div className='icon'>
                    <AiFillInstagram/>
                </div>
                <div className='icon'>
                    <AiOutlineTwitter/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
