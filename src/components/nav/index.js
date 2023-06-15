import React from "react"
import { NavWrapper, NavItems, NavLink } from "./styles"
import { Link } from "react-scroll"

const Navigation = () => (
    <NavWrapper>
        <NavItems>
            <Link activeClass="active" to="home" spy={true} smooth={true}>
                <NavLink>
                    Home
                </NavLink>
            </Link>

            <Link activeClass="active" to="about" spy={true} smooth={true}>
                <NavLink>
                    About Me
                </NavLink>
            </Link>

            <Link activeClass="active" to="skills" spy={true} smooth={true}>
                <NavLink>
                    Skills
                </NavLink>
            </Link>

            <Link activeClass="active" to="experience" spy={true} smooth={true}>
                <NavLink>
                    Experience
                </NavLink>
            </Link>

            <Link activeClass="active" to="projects" spy={true} smooth={true}>
                <NavLink>
                    Projects
                </NavLink>
            </Link>

            <Link activeClass="active" to="contact" spy={true} smooth={true}>
                <NavLink>
                    Contact
                </NavLink>
            </Link>

            <Link activeClass="active" to="resume" spy={true} smooth={true}>
                <NavLink>
                    Resume
                </NavLink>
            </Link>
        </NavItems>
    </NavWrapper>
)

export default Navigation