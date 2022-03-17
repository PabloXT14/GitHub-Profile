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
        --color-primary: #09D030;
        --color-secondy: #6e2594;
        --color-light: #FFF;
        --color-dark: #000;

        --background-page: linear-gradient(120deg, #252525, #444);
        --background-header: #808080;
        --background-section: rgba(255, 255, 255, .95);
        --background-repos: rgba(0, 0, 0, .05);
        --background-language: #252525;
        
        --color-title: #E5E5E5;
        --color-text: #111;
        --color-dark-500: #444;
        --color-dark-400: #777;
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