import React from "react";
import Layout from "../components/layout";
import { Element } from "react-scroll";
import Home from "../components/home";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Header from "../components/header";
import About from "../components/about";
import Skills from "../components/skills";
import Experience from "../components/experience";
import Footer from "../components/footer";

const Index = () => {
    return (
        <Layout>
            <Header/>
            <Element name="home">
                <Home/>
            </Element>
            <Element name="about">
                <About/>
            </Element>
            <Element name="skills">
                <Skills/>
            </Element>
            <Element name="experience">
                <Experience/>
            </Element>
            <Element name="projects">
                <Projects/>
            </Element>
            <Element name="contact">
                <Contact/>
            </Element>
            <Footer/>
        </Layout>
    )
}

export default Index;