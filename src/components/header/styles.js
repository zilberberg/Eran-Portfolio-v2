import styled from "styled-components"
import myImage from '../../images/Portfolio-cartoon.png';

export const HeaderWrapper = styled.div`
    background-color: ${props => props.theme.colors.light};
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1500;
    display: flex;
    padding: 30px 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`

export const ImageWrapper = styled.div`
    background-image: url(${myImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 80px;
    height: 80px;
`

export const NameWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: ${props => props.theme.size.extraLarge};
    padding-left: 20px;
`