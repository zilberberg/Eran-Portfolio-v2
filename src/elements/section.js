import styled from "styled-components"

export const SectionWrapper = styled.div`
    min-height: ${props => props.height || "100vh"};
    justify-content: center;
    flex-direction: column;
    display: flex;
    background-color: ${props => props.backgroundColor || "white"};
`

export const SectionContent = styled.div`
    min-height: ${props => props.height || "100vh"};
    padding: 200px 450px;
    display: flex;
    flex-direction: column;
`

export const InfoSection = styled.div`
    padding: 60px 0px;
    width: 50%;
`

export const Row = styled.div`
    display: flex;
`