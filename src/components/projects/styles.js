import styled from "styled-components"

export const ProjectsWrapper = styled.div`
    display: flex;
`

export const ProjectImageWrapper = styled.div`
  height: 280px;
  margin: auto;
  display: flex;
  transition: 0.5s;
  :hover {
    width: 500px;
  }
`

export const ProjectImage = styled.img.attrs((props) => ({
    src: props.image,
  }))`
  width: 450px;
  margin: auto;
  display: flex;
  transition: 0.5s;
  :hover {
    width: 500px;
  }
`