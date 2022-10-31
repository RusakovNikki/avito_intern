import React from "react"
import Moment from "react-moment"
import { Link, useParams } from "react-router-dom"
import useProducts from "../hooks/products"
import Comments from "./Comments"
import userLogo from "../images/user.png"
import Skeleton from "./ShowNews/Skeleton"

const NewsItem = () => {
  const { id } = useParams()

  const URL = `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  const [newsId, isLoading] = useProducts(URL)
  const { by, descendants, id_, kids, score, time, title, type, url } = newsId // kids - коментарии
  console.log(kids)
  const comentsItem = kids
    ? kids.map((item) => <Comments id={item} key={item} />)
    : ""
  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <div className="jobs-container__item jobs-container__item--nolink">
          <div className="jobs-container__flex-item">
            <div className="jobs-container__about about rubik-regular">
              <p className="about__type">
                <img src={userLogo} alt="" width={30} className="about__logo" />
                <span className="about__desc about__desc--font">
                  {by ? by : ""}
                </span>
              </p>
              <p className="about__type">
                Link:
                <span className="about__desc">
                  <a href={url}>{title}</a>, {kids ? kids.length : 0} comments
                </span>
              </p>
              <p className="about__type">
                Time:
                <span className="about__desc">
                  <Moment unix format="MMM, DD YYYY • hh:mm a">
                    {time}
                  </Moment>
                </span>
              </p>
              {isLoading ? <Skeleton /> : comentsItem}
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
