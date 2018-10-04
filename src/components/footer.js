import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Grid } from '../../node_modules/@material-ui/core'
import { theme } from '../layouts'

export default () => (
  <footer
    style={{
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 6,
    }}
  >
    <Grid container justify={'space-between'}>
      <Grid item>
        <a href="https://www.contentful.com/" rel="nofollow" target="_blank">
          <img
            src="https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg"
            style={{ maxWidth: '100px', width: '100%' }}
            alt="Powered by Contentful"
          />
        </a>
      </Grid>
      <Grid item>
        <Typography variant="caption">
          <a href="https://github.com/tangdrew" target="_blank">
            Site by @tangdrew
          </a>
        </Typography>
      </Grid>
    </Grid>
  </footer>
)
