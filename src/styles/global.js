import { createGlobalStyle } from 'styled-components'

import { colors } from '~/themes'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: ${colors.PRIMARY};
    -webkit-font-smoothing: antialiased !important;
  }
`
