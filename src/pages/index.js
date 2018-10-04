import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/article-preview'
import HorizontalPreview from '../components/horizontal-preview'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = {
  container: {
    width: '100%',
    padding: '5%',
  },
  tallPreview: {
    flexGrow: 1,
  },
  testPreview: {
    display: 'block',
  },
}

class RootIndex extends React.Component {
  render() {
    const { classes } = this.props
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Grid
        container
        spacing={16}
        className={classes.container}
        justify="flex-start"
      >
        <Helmet title={siteTitle} />
        {posts.map((post, index) => {
          switch (index % 3) {
            case 0:
              return (
                <Grid item xs={12} sm={6} key={index}>
                  <ArticlePreview
                    className={classes.tallPreview}
                    article={post.node}
                  />
                </Grid>
              )
            case 1:
              return (
                <Grid item xs={12} sm={6} key={index}>
                  <ArticlePreview
                    className={classes.tallPreview}
                    article={post.node}
                  />
                </Grid>
              )
            case 2:
              return (
                <Grid item xs={12} key={index}>
                  <HorizontalPreview article={post.node} />
                </Grid>
              )
          }
        })}
      </Grid>
    )
  }
}

export default withStyles(styles)(RootIndex)

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          heroImages {
            description
            file {
              url
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
          slideshow {
            file {
              url
            }
          }
        }
      }
    }
  }
`
