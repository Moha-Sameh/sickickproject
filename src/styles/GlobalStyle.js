import { createGlobalStyle } from "styled-components";
//Funtion global style

const GlobalStyle = createGlobalStyle`

body, html {
    background-image: url('https://i2.wp.com/crownlyric.com/wp-content/uploads/2020/11/Sickick-Windows-Lyrics.jpg?fit=1200%2C750&ssl=1');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 100%;
    margin: 0;
    scroll-padding-top: 5vh;
    font-family: 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
`;

export default GlobalStyle;
