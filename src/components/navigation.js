import React from 'react'
import Link from 'gatsby-link'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default () => (
  <div style={{ flexGrow: 1 }}>
    <AppBar position="static" color="default">
      <Toolbar
        style={{
          paddingLeft: '10%',
          paddingRight: '10%',
        }}
      >
        <div>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Typography variant="headline" color="textSecondary">
              <b>THE VISUAL AFFAIR</b>
            </Typography>
            <Typography variant="subheading">
              <div
                style={{
                  marginTop: '-5px',
                  fontSize: '12px',
                }}
              >
                BY CHRISTIE SUI
              </div>
            </Typography>
          </Link>
        </div>
        <div
          style={{
            marginLeft: 'auto',
          }}
        >
          <a href="https://www.instagram.com/toosuixy/?hl=en" target="_blank">
            <IconButton
              aria-label="Instagram"
              style={{
                fontSize: '12px',
              }}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </IconButton>
          </a>
        </div>
      </Toolbar>
    </AppBar>
  </div>
)
