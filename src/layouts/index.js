import React from 'react'
import Container from '../components/container'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { Paper } from '@material-ui/core'
import css from './base.css'

import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['Permanent Marker', 'Lato'].join(','),
    body1: {
      fontFamily: 'Lato',
    },
    body2: {
      fontFamily: 'Lato',
    },
    subheading: {
      fontFamily: 'Lato',
    },
    caption: {
      fontFamily: 'Lato',
    },
  },
})

class Template extends React.Component {
  render() {
    const { children } = this.props
    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <MuiThemeProvider theme={theme}>
        <link
          href="https://fonts.googleapis.com/css?family=Permanent+Marker"
          rel="stylesheet"
        />
        <Container>
          <Paper style={{ background: '#fff' }}>
            <Navigation />
            {children()}
            <Footer />
          </Paper>
        </Container>
      </MuiThemeProvider>
    )
  }
}

export default Template
