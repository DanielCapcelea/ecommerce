import React from 'react';
import Head from 'next/head';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
        <div className='layout'>
            <Head>
                <title>
                    Dream Like Me Store
                </title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
                      rel="stylesheet"/>
            </Head>
            <header>
                <Navbar/>
            </header>
            <main className='main-container'>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default Layout;