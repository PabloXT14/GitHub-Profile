import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;/*deixa as fontes da pagina suaves*/
    }

    :root {
        --theme-color: #09D030;

        --page-background: linear-gradient(120deg, #252525, #444);
        --header-background: rgba(255, 255, 255, .2);
        --lighter-background: rgba(255, 255, 255, .95);

        --main-titles: #E5E5E5;
        --text-dark-500: #444;
        --text-dark-400: #777;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;/*15px*/
        }

        @media (max-width: 720px) {
            font-size: 87.5%;/*14px*/
        }
    }

    body {
        a {
            text-decoration: none;
        }
    }

    body::-webkit-scrollbar {
        width: 6px;
    }

    body::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background: var(--theme-color);
    }

`;