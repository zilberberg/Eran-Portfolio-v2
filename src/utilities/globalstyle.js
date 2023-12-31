import { createGlobalStyle } from "styled-components"
import normalize from "./normalize"

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        font-size: 20px;
        line-height: 24px;
        font-family: 'Montserrat';
        font-weight: 400;

        .active {
             >div {
                border-bottom: 2px solid;
                font-weight: 600;
            }
        }
    }

    h1, h2, h3, h4, h5, h6 {
        margin-top: 0;
        margin-bottom: 0.5rem;
    }


`
export default GlobalStyle