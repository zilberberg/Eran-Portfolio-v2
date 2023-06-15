import styled from "styled-components"

export const SectionWrapper = styled.div`
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    background-color: ${props => props.backgroundColor || "white"};
    padding: 200px 0px;
`

export const InfoSection = styled.div`
    padding: 30px;
    width: 600px;
`