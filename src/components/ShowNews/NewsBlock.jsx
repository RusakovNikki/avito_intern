import React from "react"
import timeConvert from "unix-timestamp-converter"
import useProducts from "../../hooks/products"
import Moment from "react-moment"

const NewsBlock = ({ id }) => {
  const URL_EMPLOYER = `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  const [item] = useProducts(URL_EMPLOYER)

  // console.log(item)

  const { by, descendants, id_, kids, score, time, title, type, url } = item // kids - коментарии

  return (
    <>
      {item && (
        <div className="jobs-container__item">
          <div className="jobs-container__flex-item">
            <div className="jobs-container__about about rubik-regular">
              <p className="about__type">
                Score:
                <span className="about__desc"> {score}</span>,{" "}
                {kids ? kids.length : 0} comments
              </p>

              <p className="about__type">
                Time:
                <span className="about__desc">
                  <Moment unix format="MMM, DD YYYY • hh:mm a">
                    {time}
                  </Moment>
                </span>
              </p>
            </div>
          </div>
          <div className="jobs-container__flex-item">
            <div className="jobs-container__desc">
              <div className="jobs-container__title roboto">{by}</div>
              <div className={`jobs-container__specifics  roboto`}>{title}</div>
            </div>
            <div className="jobs-container__more-btn roboto"></div>
          </div>
        </div>
      )}
    </>
  )
}

export default NewsBlock
