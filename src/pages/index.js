import React from "react";
import Layout from "../components/layout";
import { Element } from "react-scroll";
import Navigation from "../components/nav";
import Home from "../components/home";
import Projects from "../components/projects";
import Contact from "../components/contact";

const Index = () => {
    return (
        <Layout>
            <Navigation/>
            <Element name="home">
                <Home/>
            </Element>
            <Element name="projects">
                <Projects/>
            </Element>
            <Element name="contact">
                <Contact/>
            </Element>
        </Layout>
    )
}

export default Index;