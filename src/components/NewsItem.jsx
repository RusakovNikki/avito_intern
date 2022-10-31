import React from "react"
import { Link, useParams } from "react-router-dom"
import useProducts from "../hooks/products"
import Skeleton from "./ShowNews/Skeleton"

const NewsItem = () => {
  const { id } = useParams()

  const URL = `https://hacker-news.firebaseio.com/v0/newstories.json`

  const [newsId, isLoading] = useProducts(URL)
  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <div className="jobs-container__item">
          <div className="jobs-container__flex-item">
            <div className="jobs-container__about about rubik-regular">
              <p className="about__type">
                Score:
                <span className="about__desc"></span>
              </p>

              <p className="about__type">
                Time:
                <span className="about__desc"></span>
              </p>
            </div>
          </div>
          <div className="jobs-container__flex-item">
            <div className="jobs-container__desc">
              <div className="jobs-container__title roboto"></div>
              <div className={`jobs-container__specifics  roboto`}></div>
            </div>
            <div className="jobs-container__more-btn roboto"></div>
          </div>
        </div>
      )}
      <Link to={"/"}>
        <button className="button">Назад</button>
      </Link>
    </>
  )
}

export default NewsItem
