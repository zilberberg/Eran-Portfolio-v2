import React from "react"
import { NavWrapper, NavItems, NavLink } from "./styles"
import { Link } from "react-scroll"

const Navigation = () => (
    <NavWrapper>
        <NavItems>
            <Link to="home" spy={true} smooth={true}>
                <NavLink>
                    HOME
                </NavLink>
            </Link>

            <Link to="projects" spy={true} smooth={true}>
                <NavLink>
                    PROJECTS
                </NavLink>
            </Link>

            <Link to="contact" spy={true} smooth={true}>
                <NavLink>
                    CONTACT
                </NavLink>
            </Link>
        </NavItems>
    </NavWrapper>
)

export default Navigation