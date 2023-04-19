const { createGlobalStyle } = require('styled-components');

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  color: #274C5B;
  height: 100vh;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button, input {
  cursor: pointer;
}

#root {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1 1 auto;
}
`;
