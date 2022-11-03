import { Link } from "react-router-dom"
import React, { useState } from "react"

import Skeleton from "../Skeleton"
import NewsBlock from "./NewsBlock"
import useAllNews from "../../hooks/allNews"

import { useSelector } from "react-redux"

const ShowNews = () => {
  const newsItems = useSelector((state) => state.news.newsItems)
  const isLoading = useSelector((state) => state.news.isLoading)

  const [reload, setReload] = useState(false)

  const reloadPageOnClick = () => {
    setReload((prev) => !prev)
  }

  // const [newsId, isLoading] = useAllNews(true, reload)

  const skeletons = [...new Array(5)].map((_, index) => (
    <Skeleton key={index} />
  ))
  let jobItems = newsItems
    .filter((_, index) => index < 100)
    .map((item) => (
      <Link to={`/${item}`} key={item}>
        <NewsBlock id={item} />
      </Link>
    ))
  return (
    <section className="jobs-container">
      <button className="button" onClick={reloadPageOnClick}>
        Обновить
      </button>
      <br />
      <br />
      {isLoading ? skeletons : jobItems}
    </section>
  )
}

export default ShowNews
