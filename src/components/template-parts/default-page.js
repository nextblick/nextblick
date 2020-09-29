import React from "react"

import SEO from "../seo"
import Hero from "../hero"
import Layout from "../../components/layout"
import Layouts from "../../layouts"

function DefaultPage({ data }) {
  const { page } = data
  const { acfDefaultPageFields, excerpt, featuredImage, title } = page

  const layouts = acfDefaultPageFields.layouts || []

  return (
    <Layout>
      <SEO title={title} />
      <Hero
        title={title}
        subtitle={acfDefaultPageFields.subtitle}
        excerpt={excerpt}
        image={
          featuredImage && featuredImage.node.localFile.childImageSharp.fluid
        }
      />
      {layouts.map((layout, index) => (
        <Layouts key={index} layoutData={layout} />
      ))}
    </Layout>
  )
}

export default DefaultPage
