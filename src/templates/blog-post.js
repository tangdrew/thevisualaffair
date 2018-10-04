import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Slider from 'react-slick'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Typography } from '@material-ui/core'
import Media from 'react-media'

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
      const { onClick } = props
      return (
        <div
          style={{
            position: 'absolute',
            right: '-50px',
            top: '50%',
          }}
          onClick={onClick}
        >
          <IconButton>
            <ArrowRightIcon style={{ fontSize: '50px' }} />
          </IconButton>
        </div>
      )
    }

    function SamplePrevArrow(props) {
      const { onClick } = props
      return (
        <div
          style={{
            left: '-50px',
            position: 'absolute',
            top: '50%',
          }}
          onClick={onClick}
        >
          <IconButton>
            <ArrowLeftIcon style={{ fontSize: '50px' }} />
          </IconButton>
        </div>
      )
    }

    return (
      <Media query="(max-width: 1400px)">
        {matches => (
          <div style={{ background: '#fff' }}>
            <Helmet title={`${post.title} | ${siteTitle}`} />
            <div
              style={{
                width: matches ? '90%' : '80%',
                margin: '0 auto',
                padding: '2em 0',
              }}
            >
              <Typography
                variant="display1"
                style={{ textTransform: 'uppercase', color: 'black' }}
              >
                {post.title}
              </Typography>
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

            <Grid container spacing={16}>
              <Grid item xs={2} />
              <Grid item xs={8} style={{ paddingBottom: '50px' }}>
                <Slider {...sliderSettings}>
                  {slideshow.map(({ file }, index) => {
                    return (
                      <div>
                        <img
                          src={`${file.url}`}
                          key={index}
                          style={{
                            height: '40vh',
                            width: 'auto',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                          }}
                        />
                      </div>
                    )
                  })}
                </Slider>
              </Grid>
              <Grid item xs={2} />
            </Grid>
          </div>
        )}
      </Media>
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
