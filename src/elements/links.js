import styled from "styled-components";

export const InfoLink = styled.a.attrs((props) => ({
    href: props.href,
    target: props.target
}))`
    cursor: pointer;
    color: ${props => props.theme.colors.purple}
`