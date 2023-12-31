import styled from "styled-components"

export const NavWrapper = styled.div`
    align-content: center;
    display: flex;
    margin-left: auto;
    z-index: 100;
    @media (max-width: 770px) {
        display: none;
    }
`

export const NavItems = styled.nav`
    display: flex;
    align-items: center;
    a:not(:last-child) {
        margin-right: 30px;
    }
`

export const NavLink = styled.div`
    color: ${props => props.color || props.theme.colors.light};
    font-weight: 400;
    cursor: pointer;    
`

export const AnchorWrapper = styled.a.attrs((props) => ({
    href: props.href,
    target: props.target
}))`
    background-color: ${props => props.theme.colors.light};
    padding: 4px 10px;
    border-radius: 22px;
`