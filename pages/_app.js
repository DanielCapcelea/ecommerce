import React from "react";
import {Layout, Navbar} from "../components";
import '../styles/globals.css';
import {StateContext} from "../stateContext/StateContext";
import {Toaster} from "react-hot-toast";

function MyApp({Component, pageProps}) {
    return (
        <StateContext>
            <Layout>
                <Toaster/>
                <Component {...pageProps} />
            </Layout>
        </StateContext>
    )
};

import '../styles/globals.css'

export default MyApp;
