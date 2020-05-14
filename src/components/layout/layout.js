// React import
import React from "react"

// Import components
import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";
import {Helmet} from "react-helmet"

/**
 * Layout of website.
 *
 * @param children
 * @returns {*}
 * @constructor
 */
export default function Layout({children}) {
    return (
        <main>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Kristijan Soldo | Web Developer from Croatia</title>
                <meta name="description" content="Hi, I’m Kristijan, web developer from Croatia!"/>
                <meta name="robots" content="index, follow"/>
            </Helmet>
            <Navigation/>
            {children}
            <Footer/>
        </main>
    )
}
