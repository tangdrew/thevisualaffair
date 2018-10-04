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
              <Typography
                variant="title"
                className={classes.hoverHighlight}
                style={{ textTransform: 'uppercase' }}
              >
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
                style={{ textTransform: 'uppercase' }}
              />
            </Link>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={2}>
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
                  WebkitTransform: 'rotate(-90deg)',
                  MozTransformStyle: 'rotate(-90deg)',
                  msTransform: 'rotate(-90deg)',
                  OTransform: 'rotate(-90deg)',
                  filter:
                    'progid:DXImageTransform.Microsoft.BasicImage(rotation=3)',
                }}
              >
                {article.publishDate}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={10}>
            <Link to={`/blog/${article.slug}`}>
              <Media query="(max-width: 768px)">
                {matches => (
                  <div
                    style={{
                      minHeight: matches ? '300px' : '500px',
                      position: 'relative',
                      flex: 1,
                      display: 'block',
                    }}
                  >
                    <figure
                      style={{
                        margin: '0px',
                        top: 0,
                        right: 0,
                        position: 'absolute',
                        maxWidth: '70%',
                      }}
                    >
                      <img
                        style={{
                          display: 'block',
                          width: '100%',
                        }}
                        src={`${firstHeroImage.file.url}?h=500`}
                        alt=""
                      />
                    </figure>
                    <figure
                      style={{
                        margin: '0px',
                        bottom: 0,
                        left: 0,
                        position: 'absolute',
                        maxWidth: '50%',
                      }}
                    >
                      <img
                        style={{
                          display: 'block',
                          width: '100%',
                        }}
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
