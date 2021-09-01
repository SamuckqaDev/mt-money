import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    /*Global styles for application*/
    :root{
        --background: #f0f2f5;
        --red: #e52e4d;
        --blue: #286db5;
        --blue-light: #328ae8;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --shape: #ffffff;
        --green: #33cc95;
    }

    *{
        margin: 0;
        padding: 0px;
        box-sizing: border-box;
    }

    // font-size = 16px;

    html{
        @media (max-width: 1080px ){
            font-size: 93.75%; // = 15px if scrren equal 750px;
        }
        @media(max-width: 750px){
            font-size: 87.5%; // 14px if scrren equal 750px;
        }
    }

    body{
        background: var(--background);
        -webkit-font-smooting: antialiased;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }


` 