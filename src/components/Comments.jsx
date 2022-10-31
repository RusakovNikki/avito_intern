import React from "react"
import useProducts from "../hooks/products"
import parse from "html-react-parser"

import userLogo from "../images/user.png"

const Comments = ({ id }) => {
  const URL_COMMENTS = `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  const [item] = useProducts(URL_COMMENTS)
  console.log(item)
  return (
    <div className="about__container">
      <div className="about__comment">
        <div className="about__type">
          <img src={userLogo} alt="" width={30} className="about__logo" />
          <span className="about__desc">{item.by}</span>
        </div>
        <p className="about__type">
          Comment:
          <span className="about__desc">
            {item ? parse(String(item.text)) : ""}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Comments
