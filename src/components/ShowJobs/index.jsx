import React, { useEffect } from "react"
import { useLayoutEffect, useState } from "react"
import Skeleton from "./Skeleton"
import useProducts from "../../hooks/products"
import JobBlock from "../JobBlock"

const ShowJobs = () => {
  const URL = `https://hacker-news.firebaseio.com/v0/newstories.json`

  const [newsId, isLoading] = useProducts(URL)

  const skeletons = [...new Array(5)].map((_, index) => (
    <Skeleton key={index} />
  ))
  let jobItems = newsId
    .filter((_, index) => index < 10)
    .map((item) => {
      return <JobBlock key={item} id={item} />
    })
  return (
    <section className="jobs-container">
      {isLoading ? skeletons : jobItems}
    </section>
  )
}

export default ShowJobs
