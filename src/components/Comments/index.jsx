import React, { useState } from "react"
import parse from "html-react-parser"

import userLogo from "../../images/user.png"
import HierarchyComments from "./HierarchyComments"
import useItem from "../../hooks/item"
import Skeleton from "../Skeleton"

const Comments = ({ id }) => {
  const [isOpenComments, setIsOpenComments] = useState(true)
  const [comments, setComments] = useState([])

  const [item, isLoading] = useItem(id)

  const kids = item?.kids

  const showHierarchyComments = (kids) => {
    setIsOpenComments((prev) => !prev)

    if (isOpenComments) {
      kids?.map((comment) =>
        setComments((prev) => [...prev, <HierarchyComments id={comment} />])
      )
    } else {
      setComments([])
    }
  }
  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        item && (
          <div className="about__container ">
            <div
              className={`about__comment ${
                kids ? "about__comment--hover" : ""
              }`}
              onClick={() => showHierarchyComments(kids)}
            >
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
                <button className="button">
                  {isOpenComments ? "Показать все" : "Скрыть всё"}
                </button>
              )}
            </div>

            {comments}
          </div>
        )
      )}
    </>
  )
}

export default Comments
