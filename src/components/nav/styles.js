import styled from "styled-components"

export const NavWrapper = styled.div`
    font-family: sans-serif;
    align-content: center;
    display: flex;
    margin-left: auto;
    @media (max-width: 770px) {
        display: none;
    }
`

export const NavItems = styled.nav`
    display: flex;
    align-items: center;
`

export const NavLink = styled.div`
    color: ${props => props.theme.colors.darkBlue};
    margin-right: 30px;
    font-weight: 700;
    cursor: pointer;
    border-bottom: 3px solid
        ${props =>
            props.selected ? props.theme.colors.darkGrey : "transparent"};
`
