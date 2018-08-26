import React from 'react'
import Link from 'gatsby-link'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import css from './article-preview.module.css'
import Media from 'react-media'

const styles = {
  image: {
    width: '100%',
    objectFit: 'cover',
  },
  hoverHighlight: {
    '&:hover': {
      color: '#b7b7b7',
    },
  },
}

class HorizontalPreview extends React.Component {
  render() {
    const { classes, article } = this.props

    return (
      <div style={{ paddingTop: '50px' }}>
        <Grid container>
          <Grid item xs={2}>
            &nbsp;
          </Grid>
          <Grid item xs={10}>
            <Link
              to={`/blog/${article.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <Typography variant="title" className={classes.hoverHighlight}>
                {article.title}
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={2}>
            &nbsp;
          </Grid>
          <Grid item xs={10}>
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
              />
            </Link>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={2}>
            <div>
              <Typography variant="caption" className={css.rotate}>
                {article.publishDate}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={10}>
            <Link to={`/blog/${article.slug}`}>
              <Media query="(max-width: 768)">
                {matches => (
                  <img
                    style={{ maxHeight: matches ? '500px' : '300px' }}
                    className={classes.image}
                    src={`${article.heroImage.file.url}`}
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
