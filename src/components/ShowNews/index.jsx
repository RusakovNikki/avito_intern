import React, { useState } from "react"
import Skeleton from "./Skeleton"
import useProducts from "../../hooks/products"
import { Link } from "react-router-dom"
import NewsBlock from "./NewsBlock"

const ShowNews = () => {
  const [reload, setReload] = useState(false)

  const reloadPageOnClick = () => {
    setReload((prev) => !prev)
  }

  const URL = `https://hacker-news.firebaseio.com/v0/newstories.json`

  const [newsId, isLoading] = useProducts(URL, true, reload)

  const skeletons = [...new Array(5)].map((_, index) => (
    <Skeleton key={index} />
  ))
  let jobItems = newsId
    .filter((_, index) => index < 100)
    .map((item) => (
      <Link to={`/${item}`} key={item}>
        <NewsBlock id={item} />
      </Link>
    ))
  return (
    <section className="jobs-container">
      <button className="button" onClick={reloadPageOnClick}>
        Reload
      </button>
      <br />
      <br />
      {isLoading ? skeletons : jobItems}
    </section>
  )
}

export default ShowNews
