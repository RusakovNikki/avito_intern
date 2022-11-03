import { Link, useParams } from "react-router-dom"
import Moment from "react-moment"
import React, { useState } from "react"

import Comments from "./Comments"
import Skeleton from "./Skeleton"
import useItem from "../hooks/item"

import userLogo from "../images/user.png"

const NewsDiscussion = () => {
  const { id } = useParams()

  const [updateComments, setUpdateComments] = useState(false)
  const [newsId, isLoading] = useItem(id, updateComments)

  const comentsItem = newsId?.kids
    ? newsId?.kids.map((item) => <Comments id={item} key={item} />)
    : ""
  return (
    <>
      <div className="jobs-container__wrapper-buttons">
        <Link to={"/"}>
          <button className="button button--margin">К списку новостей</button>
        </Link>
        <button
          className="button button--margin"
          onClick={() => setUpdateComments((prev) => !prev)}
        >
          Обновить
        </button>
      </div>

      {newsId && (
        <div className="jobs-container__item jobs-container__item--nolink">
          <div className="jobs-container__flex-item jobs-container__flex-item--width">
            <div className="jobs-container__about about rubik-regular">
              <p className="about__type">
                <img src={userLogo} alt="" width={30} className="about__logo" />
                <span className="about__desc about__desc--font">
                  {newsId.by ? newsId.by : ""}
                </span>
              </p>
              <p className="about__type">
                Link:
                <span className="about__desc">
                  <a href={newsId.url}>{newsId?.title}</a>,{" "}
                  {newsId.kids ? newsId.kids.length : 0} comments
                </span>
              </p>
              <p className="about__type">
                Time:
                <span className="about__desc">
                  <Moment unix format="MMM, DD YYYY • hh:mm a">
                    {newsId.time}
                  </Moment>
                </span>
              </p>
              {isLoading ? <Skeleton /> : comentsItem}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default NewsDiscussion
