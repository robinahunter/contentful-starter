import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import Hero from '../components/hero'


class InfoPage extends React.Component {
  render() {
    const [author] = get(this, 'props.data.allContentfulPerson.nodes') // Get the first node


    return (
      <Layout location={this.props.location}>
        <Hero image={author.heroImage.gatsbyImage} /> 
        <Hero title={author.name} content={author.shortBio} />
        <Hero  />
      </Layout>
    )
  }
}

export default InfoPage

export const pageQuery = graphql`
  query InfoQuery {
    allContentfulPerson(
      filter: { contentful_id: { eq: "2ZWQAZcv2dSAzORfaVrHsp" } }
    ) {
      nodes {
        name
        shortBio {
          raw
        }
        title
        heroImage: image {
          gatsbyImage(layout: CONSTRAINED, placeholder: NONE, width: 1180)
        }
      }
    }
  }
`
