import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react"

import Skeleton from "../Skeleton"
import NewsBlock from "./NewsBlock"

import { fetchNews } from "../../redux/slices/newsSlice"
import { useSelector, useDispatch } from "react-redux"

const ShowNews = () => {
  const URL = "https://hacker-news.firebaseio.com/v0/newstories.json"
  const dispatch = useDispatch()

  const newsItems = useSelector((state) => state.news.newsItems)
  const isLoading = useSelector((state) => state.news.isLoading)

  const updateDataNews = () => {
    // обновление каждые 60 секунд
    setInterval(() => dispatch(fetchNews(URL)), 60000) //Reload page
  }

  useEffect(() => {
    updateDataNews()
  }, [])

  const reloadPageOnClick = () => {
    dispatch(fetchNews(URL))
  }

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
