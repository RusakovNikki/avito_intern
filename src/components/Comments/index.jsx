import React, { useState } from "react"
import useProducts from "../../hooks/products"
import parse from "html-react-parser"

import userLogo from "../../images/user.png"
import HierarchyComments from "./HierarchyComments"

const Comments = ({ id }) => {
  const [comments, setComments] = useState([])

  const URL_COMMENTS = `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  const [item] = useProducts(URL_COMMENTS)

  const kids = item?.kids

  const showHierarchyComments = (kids) => {
    kids.map((comment) =>
      setComments((prev) => [...prev, <HierarchyComments id={comment} />])
    )
  }
  return (
    <>
      {item && (
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
            {kids && kids.length && (
              <button
                className="button"
                onClick={() => showHierarchyComments(kids)}
              >
                Смотреть еще...
              </button>
            )}
          </div>

          {comments}
        </div>
      )}
    </>
  )
}

export default Comments
