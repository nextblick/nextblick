import React from "react"

import Grid from "./grid"
import ImageCarousel from "./imageCarousel"
import Team from "./team"
import Text from "./text"
import TextImage from "./textImage"
import LogoGallery from "./logoGallery"
import PostCarousel from "./postCarousel"

export default ({ layoutData }) => {
  const layoutType = layoutData.fieldGroupName

  const Default = () => (
    <div>
      In AllLayouts the mapping of this component is missing: {layoutType}
    </div>
  )

  const layouts = {
    page_Acfdefaultpagefields_Layouts_Grid: Grid,
    page_Acfdefaultpagefields_Layouts_ImageCarousel: ImageCarousel,
    page_Acfdefaultpagefields_Layouts_Team: Team,
    page_Acfdefaultpagefields_Layouts_TextImage: TextImage,
    page_Acfdefaultpagefields_Layouts_Text: Text,
    page_Acfdefaultpagefields_Layouts_LogoGallery: LogoGallery,
    page_Acfdefaultpagefields_Layouts_PostCarousel: PostCarousel,
    page_default: Default,
  }

  const ComponentTag = layouts[layoutType]
    ? layouts[layoutType]
    : layouts["page_default"]

  return <ComponentTag {...layoutData} />
}
