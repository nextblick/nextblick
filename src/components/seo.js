/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const decodeHtmlEntity = function (str) {
  return str.replace(/&raquo;/g, "»")
}

const SEO = ({
  description,
  lang,
  meta,
  metaRobotsNoindex,
  metaRobotsNofollow,
  metaImage,
  title,
}) => {
  const { site, wp } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
        wp {
          seo {
            openGraph {
              defaultImage {
                localFile {
                  publicURL
                }
              }
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaRobots = metaRobotsNoindex + ", " + metaRobotsNofollow
  const ogImage = metaImage || wp.seo.openGraph.defaultImage.localFile.publicURL

  return (
    <Helmet
      encodeSpecialCharacters={true}
      htmlAttributes={{
        lang,
      }}
      title={decodeHtmlEntity(title)}
    >
      <meta name="description" content={metaDescription} />
      <meta name="robots" content={metaRobots} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={site.siteMetadata.author} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={metaDescription} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={"/apple-touch-icon.png"}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={"/favicon-32x32.png"}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={"/favicon-16x16.png"}
      />
      <link rel="manifest" href={"/site.webmanifest"} />
      <link rel="mask-icon" href={"/safari-pinned-tab.svg"} color="#040c26" />
      <meta name="msapplication-TileColor" content="#040c26" />
      <meta name="theme-color" content="#040c26" />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `de`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
