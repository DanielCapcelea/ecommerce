import React from "react";
import {Layout} from "../components";

function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
};

import '../styles/globals.css'

export default MyApp;
