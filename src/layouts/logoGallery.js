import React from "react"

import Section from "../components/section"
import LogoGallery from "../components/logoGallery"

export default ({ bgColor, headline, images }) => {
  return (
    <Section bg={bgColor} headline={headline}>
      <LogoGallery
        items={images}
        sal="slide-up"
        salDuration="1200"
        salDelay={100}
      />
    </Section>
  )
}
