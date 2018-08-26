import React from 'react'
import Link from 'gatsby-link'
import base from './base.css'
import Container from '../components/container'
import Navigation from '../components/navigation'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Permanent Marker',
      'Lato',
    ].join(','),
    body1: {
      fontFamily: "Lato"
    },
    body2: {
      fontFamily: "Lato"
    },
    subheading: {
      fontFamily: "Lato"
    },
    caption: {
      fontFamily: "Lato"
    },
  },
})

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <MuiThemeProvider theme={theme}>
        <Container>
          <Navigation />
          {children()}
        </Container>
      </MuiThemeProvider>
    )
  }
}

export default Template
