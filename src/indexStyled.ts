import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html,
body {
padding: 0;
    margin: 0;
    font-family: 'Courier New', Courier, monospace, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}

* {
  box-sizing: border-box;
}

`
