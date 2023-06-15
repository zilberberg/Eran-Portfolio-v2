import React from "react"
import { NavWrapper, NavItems, NavLink, AnchorWrapper } from "./styles"
import { Link } from "react-scroll"
import cvPDF from '../../utilities/Eran-Zilberberg-CV.pdf';
import theme from "../../config/theme";

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

            <AnchorWrapper href={cvPDF} target={"_blank"}>
                <NavLink color={theme.colors.dark}>
                    Resume
                </NavLink>
            </AnchorWrapper>
        </NavItems>
    </NavWrapper>
)

export default Navigation