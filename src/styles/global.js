
import {createGlobalStyle} from "styled-components";
const GlobalStyle = createGlobalStyle`
    body{
        width:100vw;
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    :root{
        --lightViolet:#B7C0EE;
        --darkPurple:#330C2F;
    }

`;

export default GlobalStyle;