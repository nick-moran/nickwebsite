import React from "react";
import {Helmet} from "react-helmet";
import Header from "../components/header";
import Footer from "../components/footer";

export default ({children}) => (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>im a *REAL* boy</title>
            <link href="https://fonts.googleapis.com/css?family=Montserrat:light,regular,medium,thin,italic,mediumitalic,bold" rel="stylesheet"></link>
        </Helmet>
        <Header/>
        {children}
        <Footer/>
    </div>
)