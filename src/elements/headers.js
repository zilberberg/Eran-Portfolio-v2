import styled from "styled-components"

export const Header = styled.div`
    font-size: ${props => props.theme.size.huge};
    font-weight: ${props => props.theme.weight.extraBold};
    text-transform: uppercase;
`

export const SubHeader = styled.div`
    font-size: ${props => props.theme.size.semiHuge};
    font-weight: ${props => props.theme.weight.bold};
    text-transform: uppercase;
`

export const InfoHeader = styled.div`
    font-size: ${props => props.theme.size.extraLarge};
    font-weight: ${props => props.theme.weight.bold};
    padding-bottom: 20px;
`

export const Info = styled.div`
    font-size: ${props => props.theme.size.large};
    font-weight: ${props => props.theme.weight.medium};
    display: block;
`