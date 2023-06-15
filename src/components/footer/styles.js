import styled from "styled-components";

export const FooterWrapper = styled.div`
    width: 100%;
    height: 100px;
    background-color: ${props => props.theme.colors.dark};
    padding: 0px 250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const FooterHeader = styled.div`
    color: ${props => props.theme.colors.light};
    display: flex;
    width: 33%;
    justify-content ${props => props.position};
`

export const FooterLink = styled.a.attrs((props) => ({
    href: props.href,
    target: props.target
}))`
    cursor: pointer;
`

export const FooterIcon = styled.div`
    background-image: url(${props => props.src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 24px;
    height: 24px;
    margin-left: 20px;
`