import React from "react"
import Hero from "../components/hero/hero";
import Services from "../components/services/services";
import Layout from "../components/layout/layout";
import TechStack from "../components/techstack/techstack";

/**
 * Home page.
 *
 * @returns {*}
 * @constructor
 */
export default function Home() {
    return (
        <Layout>
            <Hero/>
            <Services/>
            <TechStack/>
        </Layout>
    );
}
