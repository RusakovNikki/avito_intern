import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={1196}
      height={143}
      viewBox="0 0 1196 143"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="448" y="4" rx="10" ry="10" width="1001" height="47" />
      <rect x="12" y="2" rx="10" ry="10" width="194" height="35" />
      <rect x="14" y="52" rx="10" ry="10" width="189" height="40" />
      <rect x="448" y="62" rx="10" ry="10" width="990" height="27" />
    </ContentLoader>
  )
}

export default Skeleton
