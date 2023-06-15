import styled from "styled-components"

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

export const TitleWrapper = styled.div`
    color: ${props => props.theme.colors.purple};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 59px;
`

export const TitleComponent = (props) => (
    <TitleWrapper>
        {`{${props.children}}`}
    </TitleWrapper>
)