import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        list-style: none;
          font-family: "Myriad";

    }

    :root{
        --primary-color: #000;
        --secondary-color: #009ed6;
        --bg-primary: #fff;
        --bg-secondary: #009ed6;
    }

    body{
        font-family: 'Myriad', sans-serif;
        color: var(--primary-color);
        background-color: #dbdbdb;//var(--secondary-black);

    }

    a {
        text-decoration: none;
    }

    .primaryText{
        color: var(--secondary-color);
        font-weight: 500;
        font-size: 2rem;

    }

    .secondaryText{
        color: var(--primary-color);
        font-weight: 500;
        font-size: 1.3rem;
                 
    }

    .highlightedText{
        color: var(--secondary-color);
    }

    .whiteText{
        color: white;
    }

    .anchor{
        display: block;
        position: relative;
        visibility: hidden;
    }

    @font-face {
        font-family: "Myriad";
        src: url("/MYRIADPRO-REGULAR.OTF");
        font-weight: normal;
     font-style: normal;
    }

    @font-face {
        font-family: "Myriad";
        src: url("/MYRIADPRO-SEMIBOLD.OTF");
        font-weight: 600;     font-style: normal;
    }

    @font-face {
        font-family: "Myriad";
        src: url("/MYRIADPRO-BOLD.OTF");
        font-weight: 700;     font-style: normal;
    }

`;
