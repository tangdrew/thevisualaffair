import React from 'react'
import Link from 'gatsby-link'
// import styles from './navigation.module.css'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const styles = {
  root: {
    flexGrow: 1,
  },
  positioning: {
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  rightNav: {
    marginLeft: 'auto',
  },
  subheader: {
    marginTop: '-5px',
    fontSize: '12px',
  },
  smallIcon: {
    fontSize: '12px',
  },
}

class Navigation extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar className={classes.positioning}>
            <div>
              <Link to={'/'} style={{ textDecoration: 'none' }}>
                <Typography variant="headline" color="inherit">
                  <b>THE VISUAL AFFAIR</b>
                </Typography>
                <Typography variant="subheading">
                  <div className={classes.subheader}>BY CHRISTIE SUI</div>
                </Typography>
              </Link>
            </div>
            <div className={classes.rightNav}>
              <a href="https://www.instagram.com/toosuixy/?hl=en" target="_blank">
                <IconButton
                  aria-label="Instagram"
                  className={classes.smallIcon}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </IconButton>
              </a>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(Navigation)
