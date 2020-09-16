import React from "react"

import SEO from "../seo"
import Hero from "../hero"
import Layout from "../../components/layout"
import Layouts from "../../layouts"

function DefaultPage({ data }) {
  const { page } = data
  const { title, featuredImage, acfDefaultPageFields } = page

  const layouts = acfDefaultPageFields.layouts || []

  return (
    <Layout>
      <SEO title={title} />
      {featuredImage && (
        <Hero
          title={title}
          image={featuredImage.node.remoteFile.childImageSharp.fluid}
        />
      )}
      {layouts.map((layout, index) => (
        <Layouts key={index} layoutData={layout} />
      ))}
    </Layout>
  )
}

export default DefaultPage
