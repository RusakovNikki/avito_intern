import React, { useEffect } from "react"
import Skeleton from "./Skeleton"
import useProducts from "../../hooks/products"
import { Link } from "react-router-dom"
import NewsBlock from "./NewsBlock"

const ShowNews = () => {
  useEffect(() => {}, [])
  const URL = `https://hacker-news.firebaseio.com/v0/newstories.json`

  const [newsId, isLoading] = useProducts(URL)

  const skeletons = [...new Array(5)].map((_, index) => (
    <Skeleton key={index} />
  ))
  let jobItems = newsId
    .filter((_, index) => index < 100)
    .map((item) => (
      <Link to={`/${item}`}>
        <NewsBlock key={item} id={item} />
      </Link>
    ))
  return (
    <section className="jobs-container">
      {isLoading ? skeletons : jobItems}
    </section>
  )
}

export default ShowNews
