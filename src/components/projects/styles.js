import styled from "styled-components"

export const ProjectsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 60px 0px;
`

export const ProjectWrapper = styled.div`
    display: flex;
    height: 600px;
`

export const ProjectImageWrapper = styled.div`

`

export const ProjectImage = styled.img.attrs((props) => ({
    src: props.src
}))`
    width: 600px;
`

export const ProjectInfoWrapper = styled.div`
    width: 50%;
    justify-content: space-evenly;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${props => props.padding || "0px"};
`

export const ProjectInfoSection = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;
`

export const ProjectLink = styled.a.attrs((props) => ({
    href: props.href,
    target: props.target
}))`
    background-color: ${props => props.theme.colors.purple};
    color: ${props => props.theme.colors.light};
    padding: 8px 14px;
    border-radius: 20px;
    font-size: 20px;
`

export const ProjectInfoTitle = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    display: flex;
    justify-content: center;
`