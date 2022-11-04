import React, { useEffect, useLayoutEffect } from "react"
import Moment from "react-moment"

import userLogo from "../../images/user.png"
import useItem from "../../hooks/item"

import { fetchItem } from "../../redux/slices/itemSlice"
import { useDispatch, useSelector } from "react-redux"

const NewsBlock = ({ id }) => {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   const URL = `https://hacker-news.firebaseio.com/v0/item/${id}.json`

  //   dispatch(fetchItem(URL))
  // }, [id])

  // const itemM = useSelector((state) => state.item.item)
  // console.log(itemM)

  const [item] = useItem(id)

  return (
    <>
      {item && (
        <div className="jobs-container__item">
          <div className="jobs-container__flex-item">
            <div className="jobs-container__about about rubik-regular">
              <p className="about__type">
                Score:
                <span className="about__desc"> {item.score}</span>,{" "}
                {item.kids ? item.kids.length : 0} comments
              </p>

              <p className="about__type">
                Time:
                <span className="about__desc">
                  <Moment unix format="MMM, DD YYYY • hh:mm a">
                    {item.time}
                  </Moment>
                </span>
              </p>
            </div>
          </div>
          <div className="jobs-container__flex-item">
            <div className="jobs-container__desc">
              <img
                src={userLogo}
                alt=""
                width={30}
                className="jobs-container__logo"
              />
              <div className="jobs-container__title roboto">{item.by}</div>
              <div className={`jobs-container__specifics  roboto`}>
                {item.title}
              </div>
            </div>
            <div className="jobs-container__more-btn roboto"></div>
          </div>
        </div>
      )}
    </>
  )
}

export default NewsBlock
