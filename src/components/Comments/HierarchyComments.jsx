import parse from "html-react-parser"
import React from "react"

import useItem from "../../hooks/item"

import userLogo from "../../images/user.png"
import Skeleton from "../Skeleton"

const HierarchyComments = ({ id }) => {
  const [item, isLoading] = useItem(id)

  const kids = item?.kids

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        item && (
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
            {kids && kids.map((comment) => <HierarchyComments id={comment} />)}
          </div>
        )
      )}
    </>
  )
}

export default HierarchyComments
