import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Slider from 'react-slick'
import Grid from '@material-ui/core/Grid'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Typography } from '@material-ui/core'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const sliderSettings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    }
    const slideshow = post.slideshow || []

    function SampleNextArrow(props) {
      const { className, style, onClick } = props
      return (
        <div
          className={className}
          style={{ ...style, display: 'block' }}
          onClick={onClick}
        />
      )
    }

    function SamplePrevArrow(props) {
      const { className, style, onClick } = props
      return (
        <div
          className={className}
          style={{ display: 'block', color: 'red' }}
          onClick={onClick}
        />
      )
    }

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={`${post.title} | ${siteTitle}`}
                style={{ textTransform: 'uppercase' }}
        />
        <div
          style={{
            width: 'calc(100% - 10em)',
            margin: '0 auto',
            padding: '2em 0',
          }}
        >
          <Typography variant="display1">{post.title}</Typography>
          <p
            style={{
              display: 'block',
            }}
          >
            {post.publishDate}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </div>

        <Grid
          container
          spacing={16}
          style={{ background: 'rgb(238, 238, 238)' }}
        >
          <Grid item xs={2} />
          <Grid item xs={8}>
            <Slider {...sliderSettings}>
              {slideshow.map(({ file }) => {
                return (
                  <figure>
                    <img src={`${file.url}`} alt="" />
                  </figure>
                )
              })}
            </Slider>
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      body {
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
`
