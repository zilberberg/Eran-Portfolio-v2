import styled from "styled-components";

export const Box = styled.div`
    background-color: ${props => props.theme.colors.darkBlue};
    padding: 20px;
    border-radius: 16px;
    color: ${props => props.theme.colors.light};
    width: fit-content;
    margin: 0px 20px 20px 0px;
    white-space: nowrap;
    text-transform: initial;
    transition-duration: .4s;
    :hover {
        padding-right: 26px;
        padding-left: 26px;
    }
`