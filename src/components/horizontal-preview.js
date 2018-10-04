import React from 'react'
import Link from 'gatsby-link'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Media from 'react-media'

const styles = {
  hoverHighlight: {
    '&:hover': {
      color: '#b7b7b7',
    },
  },
}

class HorizontalPreview extends React.Component {
  render() {
    const { classes, article } = this.props
    const [heroImage] = article.heroImages

    return (
      <div style={{ paddingTop: '50px' }}>
        <Grid container>
          <Grid item xs={1}>
            &nbsp;
          </Grid>
          <Grid item xs={11}>
            <Link
              to={`/blog/${article.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <Typography
                variant="title"
                className={classes.hoverHighlight}
                style={{ textTransform: 'uppercase' }}
              >
                {article.title}
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={1}>
            &nbsp;
          </Grid>
          <Grid item xs={11}>
            <Link
              to={`/blog/${article.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <Typography
                variant="body1"
                dangerouslySetInnerHTML={{
                  __html: article.description.childMarkdownRemark.html,
                }}
                className={classes.hoverHighlight}
                style={{ textTransform: 'uppercase' }}
              />
            </Link>
          </Grid>
        </Grid>
        <Grid container justify="space-between">
          <Grid item xs={1}>
            <div>
              <Typography
                variant="caption"
                style={{
                  paddingTop: '0px',
                  width: '120%',
                  marginTop: '100px !important',
                  marginRight: '50px !important',
                  paddingBottom: '5px',
                  whiteSpace: 'nowrap',
                  borderBottom: '1px solid #b7b7b7',
                  '-webkit-transform': 'rotate(-90deg)',
                  '-moz-transform': 'rotate(-90deg)',
                  '-ms-transform': 'rotate(-90deg)',
                  '-o-transform': 'rotate(-90deg)',
                  filter:
                    'progid:DXImageTransform.Microsoft.BasicImage(rotation=3)',
                }}
              >
                {article.publishDate}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={11}>
            <Link to={`/blog/${article.slug}`}>
              <Media query="(max-width: 768)">
                {matches => (
                  <img
                    style={{
                      maxHeight: matches ? '500px' : '300px',
                      width: '100%',
                      display: 'block',
                      objectFit: 'cover',
                    }}
                    src={`${heroImage.file.url}`}
                    alt=""
                  />
                )}
              </Media>
            </Link>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(HorizontalPreview)
