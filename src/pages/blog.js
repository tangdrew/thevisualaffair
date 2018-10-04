import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Typography } from '@material-ui/core'

import HorizontalPreview from '../components/horizontal-preview'

class BlogIndex extends React.Component {
  render() {
    const styles = {
      hero: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '12.5em',
        background: '#e1e1e1',
        margin: '-1em -2.5em 1em',
        fontSize: '2em',
        overflow: 'hidden',
      },
    }
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <div
          style={{
            width: 'calc(100% - 10em)',
            margin: '0 auto',
            padding: '2em 0',
          }}
        >
          <Typography variant="display2">Recent articles</Typography>
          {posts.map(({ node }) => {
            return <HorizontalPreview article={node} key={node.slug} />
          })}
        </div>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          heroImages {
            file {
              url
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
