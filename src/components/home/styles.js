import styled from "styled-components"
import WaveBG from "../../images/purple-wave.png"
import Laptop from "../../images/laptop.png"

export const HomeHeader = styled.div`
    font-size: ${props => props.theme.size.huge};
    font-weight: ${props => props.theme.weight.extraBold};
    color: ${props => props.theme.colors.light};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    text-shadow: 5px 5px 0px #222222;
    z-index: 10;
    line-height: initial;
    white-space: break-spaces;
    position: relative;
`

export const HomeSubHeader = styled.div`
    color: ${props => props.color};
    font-size: ${props => props.theme.size.large};
    font-weight: ${props => props.theme.weight.medium};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 47px;
    white-space: break-spaces;
    z-index: 10;
    position: relative;
`

export const WaveBackgroundWrapper = styled.div`
    background-image: url(${WaveBG});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 770px;
    position: absolute;
    top: 0;
`

export const LaptopWrapper = styled.div`
    background-image: url(${Laptop});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 400px;
    height: 480px;
    position: absolute;
    right: 250px;
    top: 300px;
`