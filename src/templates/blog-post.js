import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import styles from './blog-post.module.css'
import Slider from 'react-slick'
import Grid from '@material-ui/core/Grid'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

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
    const slideshow = post.slideshow || [];

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
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <div className="wrapper">
          <div className={styles.hero}>
            <img
              src={`${post.heroImage.file.url}?w=1180&h=400&fit=fill`}
              alt=""
            />
          </div>
          <h1 className="section-headline">{post.title}</h1>
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
                console.log(file)
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
      heroImage {
        file {
          url
        }
      }
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
