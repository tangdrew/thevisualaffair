import React from 'react'
import Link from 'gatsby-link'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import EmailIcon from '@material-ui/icons/Email'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Tooltip } from '@material-ui/core'

export default () => (
  <div style={{ flexGrow: 1 }}>
    <AppBar
      position="static"
      style={{ background: 'transparent', boxShadow: 'none' }}
    >
      <Toolbar
        style={{
          paddingLeft: '10%',
          paddingRight: '10%',
        }}
      >
        <div>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Typography
              variant="headline"
              style={{ fontFamily: 'Lato', color: 'black' }}
            >
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
            fontSize: '20px',
          }}
        >
          <a href="mailto:someone@example.com">
            <IconButton aria-label="Email">
              <EmailIcon />
            </IconButton>
          </a>
          <a href="https://www.instagram.com/toosuixy/?hl=en" target="_blank">
            <IconButton aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </IconButton>
          </a>
          <Tooltip title="Blog Archives">
            <Link to={'/blog'}>
              <IconButton aria-label="Archive">
                <LibraryBooksIcon />
              </IconButton>
            </Link>
          </Tooltip>
        </div>
      </Toolbar>
    </AppBar>
  </div>
)
