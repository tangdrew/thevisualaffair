import React from 'react'
import Link from 'gatsby-link'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import css from './article-preview.module.css'
import Media from 'react-media'

const styles = {
  postImages: {
    position: 'relative',
    flex: 1,
    display: 'block',
  },
  topRight: {
    top: 0,
    right: 0,
    position: 'absolute',
    maxWidth: '70%',
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    maxWidth: '50%',
  },
  hoverHighlight: {
    '&:hover': {
      color: '#b7b7b7',
    },
  },
}

class ArticlePreview extends React.Component {
  render() {
    const { classes, article } = this.props
    const { heroImages } = article
    const [firstHeroImage, secondHeroImage] = heroImages

    return (
      <div>
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
          <Grid item xs={10} className={classes.imageSection}>
            <Link to={`/blog/${article.slug}`}>
              <Media query="(max-width: 768px)">
                {matches => (
                  <div
                    className={classes.postImages}
                    style={{ minHeight: matches ? '300px' : '500px' }}
                  >
                    <figure
                      className={classes.topRight}
                      style={{ margin: '0px' }}
                    >
                      <img
                        className={classes.image}
                        src={`${firstHeroImage.file.url}?h=500`}
                        alt=""
                      />
                    </figure>
                    <figure
                      className={classes.bottomLeft}
                      style={{ margin: '0px' }}
                    >
                      <img
                        className={classes.image}
                        src={`${secondHeroImage.file.url}?h=500`}
                        alt=""
                      />
                    </figure>
                  </div>
                )}
              </Media>
            </Link>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(ArticlePreview)
