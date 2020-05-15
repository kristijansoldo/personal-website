import React from "react"
import Hero from "../components/hero/hero";
import Services from "../components/services/services";
import Layout from "../components/layout/layout";

export default function Home() {
    return (
        <Layout>
            <Hero/>
            <Services/>
        </Layout>
    );
}
