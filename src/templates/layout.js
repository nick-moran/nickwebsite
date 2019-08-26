import React from "react";
import {Helmet} from "react-helmet";
import Header from "../components/header";

export default ({children}) => (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>im a *REAL* boy</title>
            <link href="https://fonts.googleapis.com/css?family=Montserrat:light,regular,medium,thin,italic,mediumitalic,bold" rel="stylesheet"></link>
        </Helmet>
        <Header/>
        {children}
        
    </div>
)