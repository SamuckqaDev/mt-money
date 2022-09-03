import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    :root {
  --background: #f0f2f5;
  --red: #e52e4d;
  --blue: #286db5;
  --blue-light: #328ae8;
  --text-title: #363f5f;
  --text-body: #969cb3;
  --shape: #ffffff;
  --green: #33cc95;
  --black: #1c1c1c;
  --gray: #64676b;

 
}
*,
*:before,
*:after {
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

html {
  @media (max-width: 1080px) {
    font-size: 93.75%; // = 15px if scrren equal 750px;
  }
  @media (max-width: 750px) {
    font-size: 87.5%; // 14px if scrren equal 750px;
  }
}

html,body,div,span,
object,iframe,figure,h1,h2,h3,
h4,h5,h6,p,blockquote,pre,
a,code,em,img,small,strike,
strong,sub,sup,tt,b,u,i,ol,ul,li,
fieldset,form,label,table,caption,
tbody,tfoot,thead,tr,th,td,
main,canvas,embed,
footer,header,nav,section,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  text-size-adjust: none;
}

footer,
header,
nav,
section,
main {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

input {
  -webkit-appearance: none;
  border-radius: 0;
}
html,
body {
  height: 100%;
}
body {
  background:var(--backgroud);
  -webkit-font-smoothing: antialiased;
  font-family: 'Poppins', sans-serif;
}
`;