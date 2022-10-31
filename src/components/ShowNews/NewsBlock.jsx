import React from "react"
import timeConvert from "unix-timestamp-converter"
import useProducts from "../../hooks/products"

const NewsBlock = ({ id }) => {
  const URL_EMPLOYER = `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  const [item] = useProducts(URL_EMPLOYER)

  console.log(item)

  const { by, descendants, id_, score, time, title, type, url } = item

  const timeOfItem = timeConvert.UNIX_CODE(time)

  return (
    <>
      {item && (
        <div className="jobs-container__item">
          <div className="jobs-container__flex-item">
            <div className="jobs-container__about about rubik-regular">
              <p className="about__type">
                Score:
                <span className="about__desc"> {score}</span>
              </p>

              <p className="about__type">
                Time:
                <span className="about__desc"> {timeOfItem}</span>
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
