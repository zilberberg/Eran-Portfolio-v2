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

export const ProjectImage = styled.div`
    background-image: url(${props => props.src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 700px;
    height: 400px;
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
    padding: 4px 10px;
    border-radius: 16px;
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